const bodyParser = require('body-parser')
const db = require('../config')
class Products{
    getProducts(req,res){
        const query =`
        SELECT prodID,imageUrl,prodName,artist,details,category,price,quantity
        FROM Products
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getProduct(req,res){
        const query =`
        SELECT prodID,imageUrl,prodName,artist,details,category,price,quantity
        FROM Products
        WHERE prodID = ${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    productUpdate(req,res){
        const query = `
        UPDATE Products
        SET ?
        WHERE prodID= ${req.params.id}
        `
        db.query(query,[req.body],(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"Pruduct successfully updated"
            })
        })
    }
    addProduct(req,res){
        const query =`
        INSERT INTO Products
        SET ?;
        `
        db.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"Product added successfully"
            })
        })
    }
    deleteProduct(req,res){
        const query =`
        DELETE FROM Products
        WHERE prodID = ${req.params.id}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"This product has been deleted"
            })
        })
    }

}
module.exports = Products