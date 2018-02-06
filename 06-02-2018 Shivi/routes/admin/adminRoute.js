const express = require("express");
var router = express.Router();

const admin = require("../../models/admin/adminRegister");
const companydetails = require("../../models/admin/companydetails");
const financialdetails=require("../../models/admin/financialdetails");
//const adminOperations = require("../../db/crud/admin/adminCrud");
router.post("/register",(request,response)=>{
    var name=request.body.name;
    var userid=request.body.userid;
    var password=request.body.password;
    var reenterpassword=request.body.reenterpassword;
    var phoneno=request.body.phoneno;
    var dob=request.body.dob;
    var photo=request.body.photo;
    var signature=request.body.signature;
  //  console.log("Inside router.post"+phone_no+""+dob+""+signature);    
    var adminObject=new admin(name,userid,password,reenterpassword,phoneno,dob,photo,signature);
   // console.log("Inside router.post"+adminObject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.register(adminObject,response);
    });

    router.post("/companydetails",(request,response)=>{
    var companyname=request.body.companyname;
    var description=request.body.description;
    var tagline=request.body.tagline;
    var logo=request.body.logo;
    var line1=request.body.line1;
    var line2=request.body.line2;
    var city=request.body.city;
    var state=request.body.state;
    var country=request.body.country;
    var zipcode=request.body.zipcode;
    var longitude=request.body.longitude;
    var latitude=request.body.latitude;
    var phoneno=request.body.phoneno;
    var officeno=request.body.officeno;
    var emailid=request.body.emailid;
    var fax=request.body.fax;
    console.log("*******Inside router.post"+companyname+""+description+""+emailid);
    var companydetailsobject=new companydetails(companyname,description,tagline,logo,line1,line2,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax);
    console.log("Inside router.post");
    console.log(companydetailsobject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.companydetails(companydetailsobject,response);
    });
    router.post("/financialdetails",(request,response)=>{
    var accountno=request.body.accountno;
    var accounttype=request.body.accounttype;
     var holdername=request.body.holdername;
    var bankname=request.body.bankname;
    var branch=request.body.branch;
    var ifsc=request.body.ifsc;
    var financialdetailsobject=new financialdetails(accountno,accounttype,holdername,bankname,branch,ifsc);
    console.log("Inside router.post");
    console.log(financialdetailsobject);
    })
  
     module.exports = router;
