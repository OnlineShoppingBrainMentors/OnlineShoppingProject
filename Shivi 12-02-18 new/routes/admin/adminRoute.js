
const express = require("express");
const router = express.Router();
//const app=express();
/*Image Upload --------------------*/

 
  //const storage=multer.diskStorage({
  //   destination:'./public/uploads/',
  //   filename:function(req,file,cb){
  //     console.log(file);
  //      cb(null,file.fieldname + "-" +Date.now()+path.extname(file.originalname));
  //      cb(null,file.fieldname + "-" +Date.now());
  //   }
  //   });
  // //Init Upload
  //  const upload=multer({
  //    storage: storage,
  //    limits:{filesize:10000},
  //    fileFilter: function(req, file, cb) {
  //        checkFileType(file,cb);
  //    }
  //  }).array('carouselimage');

  //  function checkFileType(file,cb){ 
  //    // Allowed ext
  //     var filetypes = /jpeg|jpg|png|gif/;
  //    //  Check mime
  //     var mimetype = filetypes.test(file.mimetype);
  //     // Check ext
  //     var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  //     if (mimetype && extname) {
  //       return cb(null, true);
  //     } else{ 
  //      cb("Error: File upload only supports the following filetypes - " + filetypes);
  //     cb("Error:Images Only!");
  //   }
  // }

  // app.post('/imageupload',(req,res)=>{
  //   upload(req,res,function(err) {
  //     if(err) {
  //       return res.end("Error uploading file.");
  //   }
  //   else{
  //      /* if(req.file==undefined){
  //  res.render('./public/views/admin/imageupload');
  //   }*/
  //       //else{
  //          console.log(req.files);
  //       //message:'File uploaded successfully' 
  //   res.end("File is uploaded");
  //     // }
  //   }
  // });
  //  });



  const imageupload=require("../../models/admin/imageupload");
  const multer=require('multer');
  const path=require('path');
  const storage=multer.diskStorage({
    destination:'./public/uploads/',
    filename:function(req,file,cb){
      console.log(file);
       cb(null,file.fieldname + "-" +Date.now()+path.extname(file.originalname));
       cb(null,file.fieldname + "-" +Date.now());
  }
    });
//       //Init Upload
   const upload=multer({
     storage: storage,
    limits:{filesize:10000},
     fileFilter: function(req, file, cb) {
        checkFileType(file,cb);
     }
   }).array('carouselimage');

   function checkFileType(file,cb){ 
     // Allowed ext
      var filetypes = /jpeg|jpg|png|gif/;
       //Check mime
      var mimetype = filetypes.test(file.mimetype);
       //Check ext
      var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

      if (mimetype && extname) {
        return cb(null, true);
      } else{ 
       cb("Error: File upload only supports the following filetypes - " + filetypes);
      cb("Error:Images Only!");
    }
  }


 
 
 //***************************************************************************************************/
router.post('/imageupload',(req,res)=>{
  console.log("Hello we are in app.post /imageupload");
  console.log("request data is :");
  console.log(req);
//   const multer=require('multer');
//   const path=require('path');
//   const storage=multer.diskStorage({
//     destination:'./public/uploads/',
//     filename:function(req,file,cb){
//       console.log(file);
//        cb(null,file.fieldname + "-" +Date.now()+path.extname(file.originalname));
//        cb(null,file.fieldname + "-" +Date.now());
//   }
//     });
// //       //Init Upload
//    const upload=multer({
//      storage: storage,
//     limits:{filesize:10000},
//      fileFilter: function(req, file, cb) {
//         checkFileType(file,cb);
//      }
//    }).array('carouselimage');

//    function checkFileType(file,cb){ 
//      // Allowed ext
//       var filetypes = /jpeg|jpg|png|gif/;
//        //Check mime
//       var mimetype = filetypes.test(file.mimetype);
//        //Check ext
//       var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//       if (mimetype && extname) {
//         return cb(null, true);
//       } else{ 
//        cb("Error: File upload only supports the following filetypes - " + filetypes);
//       cb("Error:Images Only!");
//     }
//   }
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    else{
      /* if(req.file==undefined){
             res.render('./public/views/admin/imageupload');
          }*/
//        else{
        console.log(req.files);
//        message:'File uploaded successfully' 
        res.end("File is uploaded");
//       }
        }
  });
  /*let carouselimage=req.body.carouselimage;   
      let imageuploadobject=new imageupload(carouselimage);
      console.log("Inside router.post"+imageuploadobject);
      const adminOperations=require('../../db/crud/admin/adminCrud');
      adminOperations.imageupload(imageuploadobject,res);*/
  });


 //***************************************************************************************************/

 /*----------------------*/
 
const admin = require("../../models/admin/adminRegister");
const companydetails = require("../../models/admin/companydetails");
const financialdetails=require("../../models/admin/financialdetails");
const cardDetails=require("../../models/admin/cardDetails")
const adminOperations = require("../../db/crud/admin/adminCrud");

 //***************************************************************************************************/

router.post("/register",(request,response)=>{
    let name=request.body.name;
    let userid=request.body.userid;
    let registrationuserid=request.body.registrationuserid;
    let oldpassword=request.body.oldpassword;
    let password=request.body.password;
    let reenterpassword=request.body.reenterpassword;
    let phoneno=request.body.phoneno;
    let dob=request.body.dob;
    console.log("Inside router.post"+phoneno+""+dob);    
    let adminObject=new admin(name,userid,registrationuserid,oldpassword,password,reenterpassword,phoneno,dob);
    console.log("Inside router.post"+adminObject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.register(adminObject,response);
    });
 //***************************************************************************************************/

    router.post("/companydetails",(request,response)=>{
    console.log("Inside router.post method with request object :")
    console.log(request.body);
    let companyname=request.body.companyname;
    let description=request.body.description;
    let tagline=request.body.tagline;
    let logo=request.body.logo;
    let address=request.body.address;
    let line1=request.body.line1;
    //let line2=request.body.line2;
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
    console.log("Inside router.post"+companyname+""+description+""+phoneno);
    let companydetailsobject=new companydetails(companyname,description,tagline,logo,line1,city,state,country,zipcode,longitude,latitude,phoneno,officeno,emailid,fax);
    console.log("Inside router.post");
    console.log(companydetailsobject);
    const adminOperations=require('../../db/crud/admin/adminCrud');
    adminOperations.companydetails(companydetailsobject,response);
    });

     //***************************************************************************************************/

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
     //***************************************************************************************************/

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
