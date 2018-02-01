const Admin=require("../../schema/admin/adminSchema");

var adminOperations={
    register(adminObject,response){
        console.log("Inside Register.....",adminObject);
        Admin.create(adminObject,function(err){
            if(err){
                response.send("Can't Register Error");
                console.log("Error is ",err);
            }
            else{
                console.log("Register ",adminObject);
                response.send("Register Done");
            }
        });
    }
}
    module.exports=adminOperations;