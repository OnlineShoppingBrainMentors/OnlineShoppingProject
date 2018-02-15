const connection = require("../../connection");
const Schema=connection.Schema;


const orderchema = new Schema({


   // _id:{type:String} ,
    orderid: {type:String,required : true},
    date:{type:String,required : true},
    products: [
        {
            productid:{type:String,required : true} ,
            name: {type:String,required : true},
            shortdescription: {type:String},
            quantity: {type:String,required : true},
            sellingprice: {type:String,required : true},
            mrp:{type:String,required : true} ,
            tax:{type:String,required : true} 
        }
    ],
    deliverycharges:{type:String,required : true} ,
    deliverydate: {type:String,required : true},
    promotion: {type:String},
    amount:{type:String,required : true} ,
    deliveryaddress: {type:String,required : true},
    status: {type:String,required : true},
    clientdetails: {
        clientid:{type:String,required : true} ,
        name: {type:String,required : true},
        phone: {type:String,required : true},
        alternatephone:{type:String} 
    },
    location: [
        {
            date:{type :Date,required : true} ,
            desc:{type:String} 
        }
    ],
    adminemail:{type:String,required : true,unique:true} ,
    confirmationdate:{type: Date,required : true} 







})