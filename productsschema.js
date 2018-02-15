const connection = require("../../connection");
const Schema=connection.Schema;


const productsschema = new Schema({
    productid: {type:String,required : true},
name: {type:String,required : true},
shortdescription:{type:String,required : true} ,
stock: {type:String,required : true},
status:{type:String,required : true} ,
category:{type:String,required : true} ,
subcategory: {type:String,required : true},
set: {type:String,required : true},
variants: [{type:String,required : true}],
purchaseprice:{type:String,required : true} ,
sellingprice: {type:String,required : true},
mrp: {type:String,required : true},
tax:{type:String,required : true} ,
description: {type:String,required : true},
images: [{type:String}],
maximumquantitylimit: {type:String,required : true},
specification: {
    key1:{type:String} ,
    key2:{type:String} ,
    key3:{type:String} 
},
averagerating:{type:String,required : true} ,
creationdate: {type:Date,required : true},
modificationdate: {type:Date,required : true},
reviews: [
    {
        rating:{type:String} ,
        review:{type:String} ,
        description: {type:String},
        by: {type:String},
        time: {type:Date}
    },
    {
        rating:{type:String} ,
        review: {type:String},
        description: {type:String},
        by: {type:String},
        time:{type:Date}
    }
],
faq: [
    {
        question: {type:String},
        by: {type:String},
        time: {type:Date},
        upvote: {type:String},
        downvote:{type:String} ,
        answers: [
            {
                by: {type:String},
                time: {type:Date},
                description:{type:String} 
            }
        ]
    }
]
})