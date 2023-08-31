// global error handling
module.exports = (err,req,res,next) => {
    if(err){
        let status = err.status || 500
        res.json({
            status,
            msg: "An error has occured, please try again later"
        })
    }
    next()
}
//next function passes control to the next middleware