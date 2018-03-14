const express = require("express");
var router = express.Router();

//******************************************************************************************************************** 
//Routing for index page(index.html) and it's spa 
//********************************************************************************************************************
//check website is registered or not and if not registered, then redirect to superuser registration page
router.post("/websitecheck", (request, response) => {
  console.log("Inside router.post /websitecheck method");
  console.log(request.body);
  const checkWebsiteRegistration = require('./../../helper/commonhelper/index/checkWebsiteRegistrationHelper');
  checkWebsiteRegistration(response);
});
//********************************************************************************************************************



//********************************************************************************************************************
//********************************************************************************************************************
//Routing for superuseregistartion page(demo.html) and it's spa 
//********************************************************************************************************************
//check login details of superuser and change password and submit details of superuser in db


router.post("/register", (request, response) => {
  let name = request.body.name;
  let userid = request.body.userid;
  let registrationuserid = request.body.registrationuserid;
  let oldpassword = request.body.oldpassword;
  let password = request.body.password;
  let phoneno = request.body.phoneno;
  let dob = request.body.dob;


  const companydetailsmodel = require("../../models/companydetailsModel/companydetails");
  let companydetailsObject = new companydetailsmodel();
  companydetailsObject.superusersetter(name, userid, password, phoneno, dob);

  const updatesuperuser = require('./../../helper/commonhelper/superuserregistration/superuserregistrationhelper');
  updatesuperuser(companydetailsObject, registrationuserid, oldpassword, response);

});


//********************************************************************************************************************
//submit company details of website in db


router.post("/companydetails", (request, response) => {
  console.log("Inside router.post method with request object :")
  console.log(request.body);
  let companyname = request.body.companyname;
  let description = request.body.description;
  let tagline = request.body.tagline;
  let logo = request.body.logo;
  let address = request.body.address;
  let line1 = request.body.line1;
  //let line2=request.body.line2;
  let city = request.body.city;
  let state = request.body.state;
  let country = request.body.country;
  let zipcode = request.body.zipcode;
  let longitude = request.body.longitude;
  let latitude = request.body.latitude;
  let phoneno = request.body.phoneno;
  let officeno = request.body.officeno;
  let emailid = request.body.emailid;
  let fax = request.body.fax;
  console.log("Inside router.post" + companyname + "" + description + "" + phoneno);
  let companydetailsobject = new companydetails(companyname, description, tagline, logo, line1, city, state, country, zipcode, longitude, latitude, phoneno, officeno, emailid, fax);
  console.log("Inside router.post");
  console.log(companydetailsobject);
  const adminOperations = require('../../db/crud/admin/adminCrud');
  adminOperations.companydetails(companydetailsobject, response);
});


// router.post("/companydetails", (request, response) => {
//   const companydetails = require("../../models/admin/companydetails");
//   var companyname = request.body.companyname;
//   var description = request.body.description;
//   var tagline = request.body.tagline;
//   var logo = request.body.logo;
//   var line1 = request.body.line1;
//   var line2 = request.body.line2;
//   var city = request.body.city;
//   var state = request.body.state;
//   var country = request.body.country;
//   var zipcode = request.body.zipcode;
//   var longitude = request.body.longitude;
//   var latitude = request.body.latitude;
//   var phoneno = request.body.phoneno;
//   var officeno = request.body.officeno;
//   var emailid = request.body.emailid;
//   var fax = request.body.fax;
//   console.log("Inside router.post" + companyname + "" + description + "" + emailid);
//   var companydetailsobject = new companydetails(companyname, description, tagline, logo, line1, line2, city, state, country, zipcode, longitude, latitude, phoneno, officeno, emailid, fax)
//   console.log("Inside router.post");
//   console.log(companydetailsobject);
// });
//********************************************************************************************************************
//submit financial details of company in db


router.post("/financialdetails", (request, response) => {
  let accountno = request.body.accountno;
  let accounttype = request.body.accounttype;
  let holdername = request.body.holdername;
  let bankname = request.body.bankname;
  let branch = request.body.branch;
  let ifsc = request.body.ifsc;
  let financialdetailsobject = new financialdetails(accountno, accounttype, holdername, bankname, branch, ifsc);
  const adminOperations = require('../../db/crud/admin/adminCrud');
  adminOperations.financialdetails(financialdetailsobject, response);
  console.log("Inside router.post");
  console.log(financialdetailsobject);
});


// router.post("/financialdetails", (request, response) => {
//   const financialdetails = require("../../models/admin/financialdetails");
//   var accountno = request.body.accountno;
//   var accounttype = request.body.accounttype;
//   var holdername = request.body.holdername;
//   var bankname = request.body.bankname;
//   var branch = request.body.branch;
//   var ifsc = request.body.ifsc;
//   var financialdetailsobject = new financialdetails(accountno, accounttype, holdername, bankname, branch, ifsc);
//   console.log("Inside router.post");
//   console.log(financialdetailsobject);
// });
//********************************************************************************************************************
//submit card details of company in db


router.post("/cardDetails", (request, response) => {
  let cardno = request.body.cardno;
  let cardholdername = request.body.cardholdername;
  let cvv = request.body.cvv;
  let cardtype = request.body.cardtype;
  let expirydate = request.body.expirydate;
  let cardprovider = request.body.cardprovider;
  let bank = request.body.bank;
  let branch = request.body.branch;
  let cardDetailsObject = new cardDetails(cardno, cardholdername, cvv, cardtype, expirydate, cardprovider, bank, branch);
  const adminOperations = require('../../db/crud/admin/adminCrud');
  adminOperations.cardDetails(cardDetailsObject, response);
  console.log("Inside router.post");
  console.log(cardDetailsObject);
});


//********************************************************************************************************************
//********************************************************************************************************************
//Routing for admindashboard page(admindashboard.html) and it's spa 
//********************************************************************************************************************
//fetching admin dteails
router.post("/adminDetails", (request, response) => {
  // let cardno = request.body.cardno;
  // let cardholdername = request.body.cardholdername;
  // let cvv = request.body.cvv;
  // let cardtype = request.body.cardtype;
  // let expirydate = request.body.expirydate;
  // let cardprovider = request.body.cardprovider;
  // let bank = request.body.bank;
  // let branch = request.body.branch;
  // let cardDetailsObject = new cardDetails(cardno, cardholdername, cvv, cardtype, expirydate, cardprovider, bank, branch);
  // const adminOperations = require('../../db/crud/admin/adminCrud');
  // adminOperations.cardDetails(cardDetailsObject, response);
  // console.log("Inside router.post");
  // console.log(cardDetailsObject);
  let json = require("./../../public/jsons/shivijsons/adminDetails.json");
  console.log(json);
  response.json(json);
});



//********************************************************************************************************************
//********************************************************************************************************************




module.exports = router;
