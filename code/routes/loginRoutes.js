const express = require("express");
const router = express.Router();
router.post("/login",(request,response)=>{
    var userid=request.body.userid;
    var password=request.body.password;
    var userObject=new login(userid,password);
    const userOperations=require('./db/admin/adminCrud');
    userOperations.fetchUser(userObject,response);
});
                 

module.exports = router;