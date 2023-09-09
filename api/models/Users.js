// use class to create new objects 


const db = require('../config')
const {hash,compare,hashSync} = require('bcrypt')//encryption of pswd
const {tokenCreate} = require('../middleware/AuthenticateUser')


class Users{
    getUsers(req,res){
        const query =`
        SELECT userID, CONCAT(firstName,' ',lastName) 'Fullname',
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
        SELECT userID, CONCAT(firstName,' ',lastName) 'Fullname',gender,userDOB,emailAdd,profileUrl,Role
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

    //update user details in a database
    //check user pass exists in the req body of dt, if it does we hash it and add salt rounds(add characters) to the function
    //use ? as placeholder to insert dt(actual data) to be updated


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
                msg:"User record has been deleted"
            })
        })
    }
    // async registerUser(req,res){
    //     const data = req.body
    //     data.userPass = hash(data.userPass,15)

    //     const payload ={
    //         emailAdd: data.emailAdd,
    //         userPass: data.userPass
    //     }
    //     const query = `
    //     INSERT INTO Users
    //     SET ?;
    //     `
    //     const token = tokenCreate(payload)
    //     db.query(query,[data],(err)=>{
    //         if(err) throw err
    //         res.json({
    //             status:res.statusCode,
    //             msg:"You have signed up"
    //         })
    //     })
    // }
    async registerUser(req,res) {
        const data = req.body;

        if (!data.userPass) {
            return res.json ({
                status: res.statusCode,
                msg: "Password is required"
            })
        }

        data.userPass = await hash(data.userPass, 15);

        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }

        const query = `
            INSERT INTO Users
            SET ?;
            `
        
        db.query(query, [data], (err) => {
            if(err) throw err

            let token = tokenCreate(user);
            res.json ({
                status: res.statusCode,
                msg: "You are registered"
            })
        })
    }

loginUser(req, res) {
    const { emailAdd, userPass } = req.body;
  
    const query = `
      SELECT userID, firstName, lastName,
      gender, userDOB, emailAdd,
      userPass, profileUrl, Role
      FROM Users
      WHERE emailAdd = '${emailAdd}';
    `;
    db.query(query, async (err, result) => {
        if (err) throw err;
        if (!result?.length) {
          res.status(401).json({ msg: "Invalid email or password." });
        } else {
          await compare(userPass, result[0].userPass, (compareErr, compareResult) => {
            if (compareErr) throw compareErr;
            if (compareResult) {
              res.json({
                msg: "Logged in",
                token: tokenCreate({
                  emailAdd,
                  userPass,
                }),
                result: result[0],
              });
            } else {
              res.status(401).json({ msg: "Invalid email or password." });
            }
          });
        }
      });
    }    
    // db.query(query, async (err, result) => {
//       if (err) throw err;
      
//       if (!result?.length) {
//         res.json({ status: res.statusCode, msg: "You provided a wrong email." });
//       } else {
//         compare(userPass, result[0].userPass, (compareErr, compareResult) => {
//           if (compareErr) throw compareErr;
//           const token = tokenCreate({ emailAdd, userPass });
          
//           if (compareResult) {

            
//             res.json({ msg: "Logged in", token, result: result[0] });
//           } else {
//             res.json({ status: res.statusCode, msg: "Invalid password or you have not registered" });
//           }
//         });
//       }
//     });
//   }

}
module.exports = Users
