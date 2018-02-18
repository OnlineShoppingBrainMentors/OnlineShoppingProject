function start(schema, object, andcondition, response, errorjson, failjson, successjson, callbackfunction) {
    schema.find(object, (error, docs) => {
        console.log("Inside Find Method");
        if (error) {
            console.log("error is : " + error);
            console.log("Error json is :");
            console.log(errorjson);
            if (response.json)
                response.json(errorjson);
        }
        else {
            console.log("docs is : ");
            console.log(docs);
            if (docs.length == 0) {
                console.log("Fail json is :");
                console.log(failjson);
                if (response.json)
                    // response.json({ redirectpath: '/register.html' });
                    response.json(failjson);

            }
            else
                if (docs.length >= 1) {
                    console.log("Success json is :");
                    console.log(successjson);
                    if (response.json)
                        // response.json("Website/companydetails/superuser is already registered can't register again...");
                        response.json(successjson);
                }
        }
    }).and(andcondition);
}
module.exports = start;