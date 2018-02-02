const Admin=require("../../schema/admin/adminSchema");

var adminOperations={
    register(adminObject,response){
        console.log("Inside Register method in adminOperations variable with adminObject : ",adminObject);
        Admin.create(adminObject,function(err){
            if(err){
                response.send("Can't Register Some Error occured in DB");
                console.log("Can't Register Some Error occured in DB. Error is ",err);
            }
            else{
                console.log("Register done successfully. AdminObject is -->",adminObject);
                response.send("Register Done");
            }
        });
    }
}
    module.exports=adminOperations;