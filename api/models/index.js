//connect tables  


const Products = require('./Products')
const Users = require('./Users')


//export the objects 
module.exports = {
    products: new Products(),
    users: new Users()
}