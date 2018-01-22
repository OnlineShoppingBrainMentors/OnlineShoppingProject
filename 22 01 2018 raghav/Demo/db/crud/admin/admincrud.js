//var User = require("../../schema/admin/adminschema");
const userOperation={
    getPersonalDetails(userObject,response){
        User.find(function(err, docs){
            if(err){
                response.send('Error in details');
            }
            if(docs){
                if(docs.length>0){
                    response.send('Done');
                }
                else{
                    response.send('Invalid Details');
                }
            }
        });
    },