// use class to create new objects 


const db = require('../config')
const {hash,compare,hashSync} = require('bcrypt')//encryption of pswd
const {tokenCreate} = require('../middleware/AuthenticateUser')
const bodyParser = require('body-parser')

class Users{
    getUsers(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,'',lastName) 'User Fullname',
        gender,userDOB,emailAdd,profileUrl,Role
        FROM Users
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getUser(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,'',lastName) 'User Fullname',gender,userDOB,emailAdd,profileUrl,Role
        FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    updateUser(req,res){
        const dt = req.body
        if(dt.userPass){
            dt.userPass =hashSync(dt.userPass,15)
        }
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}
        `
        db.query(query,[dt],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"User record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"User record has bee deleted"
            })
        })
    }
    async registerUser(req,res){
        const dt = req.body
        dt.userPass = hash(dt.userPass,15)

        const payload ={
            emailAdd: dt.emailAdd,
            userPass: dt.userPass
        }
        const query = `
        INSERT INTO Users
        SET ?;
        `
        const token = tokenCreate(payload)
        db.query(query,[dt],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                msg:"You have signed up"
            })
        })
    }
    loginUser(req,res){
        const {emailAdd,userPass} = req.body
        const query =`
        SELECT CONCAT(firstName,'',lastName)'User Fullname',emailAdd,userPass
        FROM Users
        WHERE emailAdd = ${emailAdd}
        `
        db.query(query,async(err,result)=>{
            if(err) throw err
            if (!result?.length) {
                res.json({
                    status:res.statusCode,
                    msg:"You have entered wrong email"
                }) 
            } else {
                await compare(userPass,result[0].userPass,(compErr,compResult)=>{
                    if(compErr) throw compErr

                    const token = tokenCreate({emailAdd,userPass})
                    if (compResult) {
                        res.json({
                            status:res.statusCode,
                            token,
                            msg:"You are logged in"
                        })
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg:"Incorrect password or would you like sign up"
                        })
                    }
                })
            }
        })
    }

}
module.exports = Users