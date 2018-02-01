const express = require('express');
const app = express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*if(registered == false)
    {
        app.use(express.static("register")); 
    }
else{*/
app.use(express.static("public"));
const adminRoutes = require("./routes/admin/adminRoute")
app.use('/',adminRoutes);
//}
app.listen(3000,()=>{
    console.log("Server start...");
})