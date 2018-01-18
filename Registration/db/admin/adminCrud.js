const Admin=require('./adminSchema');
var adminOperations={
    addAdmin(adminObject,response){
        Admin.create(adminObject,function(error){
            if(error){
                response.send("Can't Add New User Some Problem in DB Side...");
            }
            else {
                response.send("User has been added successfully...");
            }
        });
    },
}
module.exports=adminOperations;