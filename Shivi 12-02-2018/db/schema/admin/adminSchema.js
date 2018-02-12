 const connection = require("../../connection");
 const Schema=connection.Schema;
// const adminRegSchema= new Schema({
//     name:{type:String},
//       userid:{type:String},
//         password:{type:String},    
//     phoneno:{type:String},
//     dob:{type:String}
//     // photo:{type:String},
//     // signature:{type:String}
//     /*name:String,userid:String,password:String,contact_no:String*/
// }) ;
// var adminModel=connection.model("accountDetails",adminRegSchema);
// module.exports=adminModel;

//const Schema = connection.Schema;
const companydetailsSchema = new Schema(
{
    // name: {type:String,required :true},
    name: {type:String},
    description: {type:String},
    logo: {type:String},
    //imagesurl:[{type:String}],
    address: {
        streetaddress: {type:String},
        city: {type:String},
        state: {type:String},
        country: {type:String},
        zipcode: {type:String},
        maplink: {type:String},
        latitude: {type:String},
        longitude: {type:String},
    }
   /* contactdetails: {
        mobile: [ {type:String,required:true} ],
        office: [{type:String}],
        fax: [{type:String}],
        email: [{type:String}]
    },
    tagline: {type:String},
    superuser: {
        name: {type:String,required :true},
        phone: {type:String,required :true},
        email: {type:String,required :true, unique : true},
        password: {type:String,required :true},
        dateofbirth: {type:String}
    },
    financialdetails: {
        accountnumber: {type:String},
        accounttype: {type:String},
        holdername: {type:String},
        bankname: {type:String},
        branchname: {type:String},
        ifsccode: {type:String}
    },
    carddetails: {
        cardtype: {type:String},
        cardno: {type:String},
        holdername: {type:String},
        expirydate: {type:String},
        cvv: {type:String},
        cardprovider: {type:String},
        bankname: {type:String},
        branchname: {type:String},
        ifsccode: {type:String}
    }*/
}
);
// var adminModel=connection.model("companydetails",companydetailsSchema);
//  module.exports=adminModel;
var companydetailsModel = connection.model("admin", companydetailsSchema);
module.exports = companydetailsModel;