const connection = require("../../connection");
const Schema=connection.Schema;

const clientsschema = new Schema({
    clientname :{type : String ,required : true},
    email : {type : String ,required : true ,unique : true },
    password : { type : String ,required : true},
    forgetpasswordcode : {type : String},
    forgotpasswordcodegenerationtime : {type : Date},
    phone : {type : String},
    alternatephone :{type : String},
    address: {
        line1: {type:String},
        line2: {type:String},
        state: {type:String},
        city: {type:String},
        country:{type:String},
        zipcode: {type:String},
    },
    status :{type:String},
    orders: [ {type:String}],
    products:[ {type:String}],
    financialdetails: {
        bankingdetails: {
            accountnumber:{type:String} ,
            accountholdername:{type:String} ,
            accounttype: {type:String},
            bankname: {type:String},
            bankbranch: {type:String},
            ifsccode: {type:String}
        },
        carddetails: {
            cardtype: {type:String},
            cardnumber: {type:String},
            cardholdername: {type:String},
            expirydate: {type : Date},
            cvv: {type:String},
            cardprovider: {type:String},
            bankname: {type:String},
            branchname: {type:String}
        }
    }




})
