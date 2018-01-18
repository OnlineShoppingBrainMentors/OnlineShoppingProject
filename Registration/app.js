const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.post("/register",(request,response)=>{
var name=request.body.name;
var email_id=request.body.email_id;
var password=request.body.password;
var phone_no=request.body.phone_no;
var admin=require('./models/admin');
var adminObject=new admin(name,email_id,password,phone_no);
const adminOperations=require('./db/admin/adminCrud');
adminOperations.addAdmin(adminObject,response);
});
/*app.post("/login",(request,response)=>{
    var userid=request.body.userid;
    var password=request.body.password;
    var user=require('./model/user');
    var userObject=new user(userid,password);
    const userOperations=require('./db/userCrud');
    userOperations.findUser(userObject,response);
});*/

    

    app.listen(1234,()=>{

        console.log("Server Start....");
    })