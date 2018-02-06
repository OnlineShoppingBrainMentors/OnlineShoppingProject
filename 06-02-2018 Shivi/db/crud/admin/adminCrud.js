const Admin=require("../../schema/admin/adminSchema");

var adminOperations={
    register(adminObject,response){
        console.log("Inside Register.....",adminObject);
        // Admin.create(adminObject,function(err){
        //     if(err){
        //         response.send("Can't Register Error");
        //         console.log("Error is ",err);
        //     }
        //     else{
        //         console.log("Register ",adminObject);
        //       //  response.send("Register Done");
        //       response.redirect("companydetails.html");
        //     }
        // });
        const url="Documents/OnlineShopping/admin/websiteregister/views/admin";
        response.sendFile(url+'/companydetails.html', { root: "../../../"});
    },
    companydetails(adminObject,response){
        console.log("Inside Register.....",adminObject);
        const url="Documents/OnlineShopping/admin/websiteregister/views/admin";
            response.sendFile(url+'/financialdetails.html', { root: "../../../"});
        }
}
    module.exports=adminOperations;