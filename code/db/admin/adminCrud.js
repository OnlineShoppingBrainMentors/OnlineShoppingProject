const Admin=require('./adminSchema');
var login=require('../../models/login');
//const express = require("express");
//const router = express.Router();

var adminOperations={
    addAdmin(adminObject,response){
        Admin.create(adminObject,function(error){
            if(error){
                response.send("Can't Add New User Some Problem in DB Side...");
            }
            else {
                //response.send("User has been added successfully...");
                response.redirect("login.html");
                }
                
            });
        },
    fetchUser(userObject,response)
    {
            console.log("Passed UserId  is : "+userObject.userid);
          
            console.log("Inside FetchUser method");
        //   userSchema.find({"userid":userObject.login[0],"password":userObject.login[1]},(error,docs)=>{
        Admin.find({login:userObject},(error,docs)=>{
            console.log("Inside UserSchema.Find Method");
                  if(error){
                       response.send('SOME DB PROBLEM OCCUR');
                      console.log("SOME DB PROBLEM OCCUR inside error");
                  }
                  else
                  if(docs.length==0){
                       response.send('Userid or Password is Invalid');
                      console.log("Userid or Password is Invalid inside docs.length ==0");
                  }
                  else
                  if(docs.length>=1){
                      response.send('Welcome '+docs[0]);
                    console.log("Inside docs.length>=1");
                      console.log('Welcome '+docs);
                  }  
          })  
    }
}
module.exports=adminOperations;