//connect tables  
const Products = require('./Products')
const Users = require('./Users')
const Cart = require('./Cart')

//export the objects 
module.exports = {
    products: new Products(),
    users: new Users(),
    cart: new Cart()
}