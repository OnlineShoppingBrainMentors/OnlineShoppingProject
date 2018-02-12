
const Admin=require("../../schema/admin/adminSchema"); 
var adminOperations={

/*Registeration*********************************** */
    register(object,response){
            console.log("Inside Register.....",object);
                Admin.create(object,function(err){
                    if(err){
                        response.send("Can't Register Error");
                        console.log("Error is ",err);
                    }
                   else{
                       console.log("Register ",object);
              response.json({result:'Successfully Registered'});
                   }
                });
      // response.json({result:'Successfully Registered'});
    },

//    update(object,olduserid,response){
//     console.log("Inside Register.....",object);
//     Admin.update({'superuser.email':olduserid},object,function(err){
//         if(err){
//             response.json({result:undefined,message:'Some Database Server error'});
//             console.log("Error is ",err);
//         }
//        else{
//            console.log("Update Successfully ",object);
//   response.json({result:true,message:'Registered Successfully'});
//        }
//     });
//    },
    update(object,condition,response,jsonsuccess,jsonerror){
        console.log("Inside Register.....",object);
        Admin.update(condition,object,function(err){
            if(err){
                response.json(jsonerror);
                console.log("Error is ",jsonerror);
            }
        else{
            console.log("Update Successfully ",object);
                response.json(jsonsuccess);
        }
        });
    },
/* Company Details************************************/
      companydetails(adminObject,response){
          console.log("*************Inside companyDetails.....",adminObject);
          //response.json({result:'Company Details sent successfully'});
          console.log("######################Inside Register.....",adminObject);
            //    Admin.create(adminObject,function(err){
            //        if(err){
            //            response.send("Can't Register Error");
            //            console.log("Error is ",err);
            //        }
            //       else{
            //           console.log("Register ",adminObject);
              response.json({result:'Successfully Registered'});
            //       }
            //    });

/* Financial Details*********************************** */
          },
        financialdetails(adminObject,response){
            console.log("Inside Financial details.....",adminObject);
            response.json({result:'Financial Details sent successfully'});
           //     response.sendFile(URL.url+'/cardDetails.html', { root: "../../../"});
        },

/*Card Details*********************************** */
         cardDetails(adminObject,response){
             console.log("Inside Financial details.....",adminObject);
             response.json({result:'Card Details sent successfully'});
             //    response.sendFile(URL.url+'/imageupload.html', { root: "../../../"});
         }
}
    module.exports=adminOperations;