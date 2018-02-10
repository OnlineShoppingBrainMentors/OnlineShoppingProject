//const Admin=require("../../schema/admin/adminSchema");
var URL=require("../../config"); 
var adminOperations={
    register(adminObject,response){
           console.log("Inside Register.....",adminObject);
            //  Admin.create(adminObject,function(err){
            //      if(err){
            //          response.send("Can't Register Error");
            //          console.log("Error is ",err);
            //      }
            //     else{
            //         console.log("Register ",adminObject);
            //         // response.send("Register Done");
            //       // response.redirect("companydetails.html");
            //      response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
            //     }
            //  });
      response.json({result:'Successfully Registered'});
         //response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
    },
      companydetails(adminObject,response){
          console.log("*************Inside companyDetails.....",adminObject);
          response.json({result:'Company Details sent successfully'});
        //  response.sendFile(URL.url+'/financialdetails.html', { root: "../../../"});

          },
        financialdetails(adminObject,response){
            console.log("Inside Financial details.....",adminObject);
            response.json({result:'Financial Details sent successfully'});
           //     response.sendFile(URL.url+'/cardDetails.html', { root: "../../../"});
        },
         cardDetails(adminObject,response){
             console.log("Inside Financial details.....",adminObject);
             response.json({result:'Card Details sent successfully'});
             //    response.sendFile(URL.url+'/imageupload.html', { root: "../../../"});
         },
}
    module.exports=adminOperations;