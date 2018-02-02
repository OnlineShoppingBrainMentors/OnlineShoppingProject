const express = require("express");
var router = express.Router();

const admin = require("../../models/admin/adminRegister");
//const adminOperations = require("../../db/crud/admin/adminCrud");
router.post("/register",(request,response)=>{
    console.log("Inside router.post /register method ");
    var name=request.body.name;
    var userid=request.body.userid;
    var password=request.body.password;
    var reenterpassword=request.body.reenterpassword;
    var phone_no=request.body.phone_no;
    var dob=request.body.dob;
    var photo=request.body.photo;
    var signature=request.body.signature;
  //  console.log("Inside router.post"+phone_no+""+dob+""+signature);    
    var adminObject=new admin(name,userid,password,reenterpassword,phone_no,dob,photo,signature);
   // console.log("Inside router.post"+adminObject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    console.log("Will call adminOperations.register method with userid "+userid);
    adminOperations.register(adminObject,response);
    });
    module.exports = router;
