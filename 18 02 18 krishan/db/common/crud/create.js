function start(schema, object, response, errorjson, successjson) {
    schema.create(object, function (err, docs) {
        if (err) {
            console.log("object is : ");
            console.log(object);
            console.log("Error is : " + err);
            console.log("Docs is : " + docs);
            console.log("ErrorJson is : ");
            console.log(errorjson);
            if (response.json)
                response.json(errorjson);
        }
        else {
            console.log("docs is : " + docs);
            console.log("SuccessJson is : ");
            console.log(successjson);
            if (response.json)
                response.json(successjson);
        }
    });
}
module.exports = start;