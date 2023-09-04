//
const bodyParser = require('body-parser')
const db = require('../config')

class Orders{
    getOrders(req,res){
        const query =`
        SELECT orderID, userID, prodID, orderDate
        FROM Orders
       
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
}
module.exports = Orders