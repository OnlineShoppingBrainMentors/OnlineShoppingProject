//const Admin=require("../../schema/admin/adminSchema");
var URL=require("../../config"); 
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
      
        response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
    },
    companydetails(adminObject,response){
        console.log("Inside companyDetails.....",adminObject);
      //  const url="Documents/OnlineShopping/admin/websiteregister/views/admin";
            response.sendFile(URL.url+'/financialdetails.html', { root: "../../../"});
        },
        financialdetails(adminObject,response){
            console.log("Inside Financial details.....",adminObject);
           // const url="Documents/OnlineShopping/admin/websiteregister/views/admin";
                response.sendFile(URL.url+'/cardDetails.html', { root: "../../../"});
        }
}
    module.exports=adminOperations;