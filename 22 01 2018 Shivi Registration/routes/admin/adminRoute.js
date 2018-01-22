const express = require("express");
var router = express.Router();
const admin = require("../../models/admin/adminRegister");
//const adminOperations = require("../../db/crud/admin/adminCrud");
router.post("/register",(request,response)=>{
    var name=request.body.name;
    var userid=request.body.userid;
    var password=request.body.password;
    var reenterpassword=request.body.reenterpassword;
    var contact_no=request.body.contact_no;
    var adminObject=new admin(name,userid,password,reenterpassword,contact_no);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.register(adminObject,response);
    });
    module.exports = router;
