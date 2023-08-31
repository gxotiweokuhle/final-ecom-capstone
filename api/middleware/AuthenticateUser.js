// user authentication
const {sign,verify} = require('jsonwebtoken')
require('dotenv').config()
const key = process.env.SECRET_KEY

// Token Creation
//using payload to transmit data between client and server 
//use payload to store the claims statement of the user which is registered 
//in this case email and pswd to associate with the token
function tokenCreate(user) {
    return sign({
        emailAdd:user.emailAdd,
        userPass:user.userPass
        },key,
        {expiresIn:'1h'}
        )
}

//Token Verification
//using payload to store the token we need security in verifying the token
//and error handling if authorization failed 
function verifyToken(req,res,next){
    const token = req.headers["authorization"]

    return verify(token,key,(err,decoded)=>{
        if(err){
            res.json({
                msg:"Token authontication failed."
            })
        }
        req.decoded = decoded
        next();
    })
} 

module.exports ={
    tokenCreate,
    verifyToken
}