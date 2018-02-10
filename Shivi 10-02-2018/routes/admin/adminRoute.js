const express = require("express");
let router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"public/uploads/");
  },
  
  filename:function(req,file,cb){
   cb(null,Date.now()+file.originalname);
  }
});
var upload=multer({storage:storage});
 router.get('/imageupload',function(reg,res,next){
   res.render('imageupload',{title:Express})
 });
router.post('/imageupload',upload.any(),function(req,res,next){
  console.log(req.files);
res.send(req.files);
});
const admin = require("../../models/admin/adminRegister");
const companydetails = require("../../models/admin/companydetails");
const financialdetails=require("../../models/admin/financialdetails");
const cardDetails=require("../../models/admin/cardDetails")
//const adminOperations = require("../../db/crud/admin/adminCrud");
router.post("/register",(request,response)=>{
    let name=request.body.name;
    let userid=request.body.userid;
    let registrationuserid=request.body.registrationuserid;
    let oldpassword=request.body.oldpassword;
    let password=request.body.password;
    let reenterpassword=request.body.reenterpassword;
    let phoneno=request.body.phoneno;
    let dob=request.body.dob;
  //  console.log("Inside router.post"+phone_no+""+dob+""+signature);    
    let adminObject=new admin(name,userid,registrationuserid,oldpassword,password,reenterpassword,phoneno,dob);
   // console.log("Inside router.post"+adminObject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.register(adminObject,response);
    });

    router.post("/companydetails",(request,response)=>{
    console.log("Inside router.post method with request object :")
    console.log(request.body);
    let companyname=request.body.companyname;
    let description=request.body.description;
    let tagline=request.body.tagline;
    let logo=request.body.logo;
    let line1=request.body.line1;
    let line2=request.body.line2;
    let city=request.body.city;
    let state=request.body.state;
    let country=request.body.country;
    let zipcode=request.body.zipcode;
    let longitude=request.body.longitude;
    let latitude=request.body.latitude;
    let phoneno=request.body.phoneno;
    let officeno=request.body.officeno;
    let emailid=request.body.emailid;
    let fax=request.body.fax;
    //console.log("Inside router.post"+companyname+""+description+""+phoneno);
    let companydetailsobject=new companydetails(companyname,description,tagline,logo,line1,line2,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax);
    console.log("Inside router.post");
    console.log(companydetailsobject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.companydetails(companydetailsobject,response);
    });
    router.post("/financialdetails",(request,response)=>{
    let accountno=request.body.accountno;
    let accounttype=request.body.accounttype;
     let holdername=request.body.holdername;
    let bankname=request.body.bankname;
    let branch=request.body.branch;
    let ifsc=request.body.ifsc;
    let financialdetailsobject=new financialdetails(accountno,accounttype,holdername,bankname,branch,ifsc);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.financialdetails(financialdetailsobject,response);
    console.log("Inside router.post");
    console.log(financialdetailsobject);
    });
    router.post("/cardDetails",(request,response)=>{
      let cardno = request.body.cardno;
      let cardholdername = request.body.cardholdername;
      let cvv = request.body.cvv;
      let cardtype = request.body.cardtype;
      let expirydate=request.body.expirydate;
      let cardprovider=request.body.cardprovider;
      let bank=request.body.bank;
      let branch=request.body.branch;
      let cardDetailsObject=new cardDetails(cardno,cardholdername,cvv,cardtype,expirydate,cardprovider,bank,branch);
      const adminOperations=require('../../db/crud/admin/adminCrud');
      adminOperations.cardDetails(cardDetailsObject,response);
      console.log("Inside router.post");
    console.log(cardDetailsObject);
    })
  
     module.exports = router;
