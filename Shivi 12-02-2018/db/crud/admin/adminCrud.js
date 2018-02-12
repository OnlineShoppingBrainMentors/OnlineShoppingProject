const Admin=require("../../schema/admin/adminSchema");
//var URL=require("../../config"); 
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
            // //         // response.send("Register Done");
            // //       // response.redirect("companydetails.html");
            // //      response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
             response.json({result:'Successfully Registered'});
                  }
               });
       //response.json({result:'Successfully Registered'});
         //response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
    },
      companydetails(adminObject,response){
          console.log("*************Inside companyDetails.....",adminObject);
          //response.json({result:'Company Details sent successfully'});
        //  response.sendFile(URL.url+'/financialdetails.html', { root: "../../../"});
/******************************* */
console.log("######################Inside Register.....",adminObject);
               Admin.create(adminObject,function(err){
                   if(err){
                       response.send("Can't Register Error");
                       console.log("Error is ",err);
                   }
                  else{
                      console.log("Register ",adminObject);
                    // response.send("Register Done");
            // //       // response.redirect("companydetails.html");
            // //      response.sendFile(URL.url+'/companydetails.html', { root: "../../../"});
             response.json({result:'Successfully Registered'});
                  }
               });

/************************************ */
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
         /* imageupload(adminObject,response){
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
         }*/






}
    module.exports=adminOperations;