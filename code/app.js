const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var admin=require('./models/admin');
var login=require('./models/login');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.post("/register",(request,response)=>{
var name=request.body.name;
var userid=request.body.userid;
var password=request.body.password;
var reenterpassword=request.body.reenterpassword;
var phone_no=request.body.phone_no;
var email_id=request.body.email_id;

var adminObject=new admin(name,userid,password,reenterpassword,phone_no,email_id);
const adminOperations=require('./db/admin/adminCrud');
adminOperations.addAdmin(adminObject,response);
});

const loginRoute = require("./routes/loginRoutes");
app.use("/login",loginRoute);

/*app.post("/login",(request,response)=>{
    var userid=request.body.userid;
    var password=request.body.password;
    var userObject=new login(userid,password);
    const userOperations=require('./db/admin/adminCrud');
    userOperations.fetchUser(userObject,response);
});*/
    

    app.listen(1234,()=>{

        console.log("Server Start....");
    })