update(object,condition,andcondition,orcondition,response,jsonsuccess,jsonfail,jsonerror)
    { 
        console.log("Inside Register.....",object);
        Admin.update(condition,object,function(err,docs)
        {
            if(err){
                response.json(jsonerror);
                console.log("Error is ",jsonerror);
            }
            else if(docs.nModified>0){
                console.log("Updated Successfully ",object);
                response.json(jsonsuccess);
                console.log("Docs : ");
                console.log(docs);
            }
            else{
                console.log("Udates were not done ",object);
                response.json(jsonfail);
                console.log("Docs : ");
                console.log(docs);
            }
        }).and(andcondition)
        .or(orcondition);
    }
