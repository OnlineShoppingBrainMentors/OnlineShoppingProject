const connection = require(../../connection);
const Schema=connection.Schema;

const websiteregistrationschema = new Schema({

   // _id: 5a7698908c649c32dcc54680,
    registrationstatus: {type : String},
    registrationdate: {type:Date ,required : true }

})