//connect tables  


const Products = require('./Products')
const Users = require('./Users')
const Orders = require('./Orders')


//export the objects 
module.exports = {
    products: new Products(),
    users: new Users(),
    orders: new Orders()
}