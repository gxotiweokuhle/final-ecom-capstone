//allow crud operations for cart

const bodyParser = require('body-parser')
const db = require('../config')
class Cart{
    getItems(req,res){
        const query =`
        SELECT c.prodID, c.quantity, p.prodName, p.price, p.imageUrl
        FROM Cart c
        JOIN Products p ON c.prodID = p.prodID;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
   
    updateItem(req,res){
        const query = `
        UPDATE Cart
        SET ?
        WHERE cartID= ${req.params.id}
        `
        db.query(query,[req.body],(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"Cart item successfully updated"
            })
        })
    }
    addItem(req,res){
        const {userID, prodID, quantity} = req.body;
        const query =`
        INSERT INTO Cart(userID, prodID, quantity)
        VALUES (?, ?);
        `;
        db.query(query,[userID, prodID, quantity],(err)=>{
            if(err){
                console.error(err);
                res.status(500).json({
                    msg: "Error adding item to cart",
                    error: err
                });
            }
            else{
                res.json({
                    status:res.statusCode,
                    msg:"Cart item added successfully"
                })
                
            }
        })
    }
    deleteItem(req,res){
        const query =`
        DELETE FROM Cart
        WHERE cartID = ${req.params.id}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This cart item has been deleted"
            })
        })
    }

}
module.exports = Cart;
