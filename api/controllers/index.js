// controls what happens at the routes and allows crud operations 
const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
const {users,products,cart,orders} = require('../models')

//User routes
routes.get('/users',(req,res)=>{
    users.getUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.getUser(req,res)
})
routes.post('/user/login',bodyParser.json(),(req,res)=>{
    users.loginUser(req,res)
})
routes.post('/user/register',bodyParser.json(),(req,res)=>{
    users.registerUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})


//======Product routes=====
routes.get('/products',(req,res)=>{
    products.getProducts(req,res)
})
routes.get('/product/:id',(req,res)=>{
    products.getProduct(req,res)
})
routes.post('/product',bodyParser.json(),(req,res)=>{
    products.addProduct(req,res)
})
routes.patch('/product/:id',bodyParser.json(),(req,res)=>{
    products.productUpdate(req,res)
})
routes.delete('/product/:id',(req,res)=>{
    products.deleteProduct(req,res)
})






//cart routes
// cart route that works now due to issues 

routes.get('/cart/:userID',(req,res)=>{
    const userID = req.params.userID;
    if(!userID){
        return res.status(400).json({ message: 'userID is required' });

    }
})
routes.post('/user/:id/cart',bodyParser.json(),(req,res)=>{
    cart.addItem(req,res)
})
routes.put('/user/:id/cart',bodyParser.json(),(req,res)=>{
    cart.updateItem(req,res)
})
routes.delete('/user/:id/cart',(req,res)=>{
    cart.deleteItem(req,res)
})

module.exports ={
    express,
    routes
}