//allow crud operations for cart

const bodyParser = require('body-parser')
const db = require('../config')
class Cart{
    getItems(req,res, userID){
        const query =`
        SELECT c.prodID, c.quantity, p.prodName, p.price, p.imageUrl
        FROM Cart c
        JOIN Products p ON c.prodID = p.prodID;
        WHERE c.userID = ?;
        `
        db.query(query,[userID],(err,results)=>{
            if(err) {
                res.status(500).json({ message: 'Internal Server Error' });
            }   else {
                res.json({ status: res.statusCode, results })
            }
            
        })
    }
   
    updateItem(req,res, userID, cartID, quantity){
        const query = `
        UPDATE Cart
        SET  quantity = ?
        WHERE cartID = ? AND userID = ?;
        `
        db.query(query,[quantity,cartID, userID],(err)=>{
            if(err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ message: 'Cart item updated!' });
            }
           
        });
    }
    addItem(req,res, userID, prodID, quantity){
        console.log("cart.addItem is called. UserID:", userID, "Product ID:", prodID, "Quantity:", quantity);
       

        const query =`
        INSERT INTO Cart(userID,prodID, quantity)
        VALUES (?, ?);
        `;
        db.query(query,[userID,prodID, quantity],(err)=>{
            if(err){
                console.error(err);
                res.status(500).json({
                    msg: "Error adding item to cart",
                    
                });
            }
            else{
                res.json({
                    msg:"Cart item added successfully"
                })
                
            }
        })
    }
    deleteItem(req,res, userID, cartID){
        const query =`
        DELETE FROM Cart
        WHERE cartID = ? AND userID = ?;
        `
        db.query(query,[cartID, userID],(err)=>{
            if(err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            }
            else {
                res.json({ message: 'Cart item deleted successfully' });
            }
        })
    }

}
module.exports = Cart;