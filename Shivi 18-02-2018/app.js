const express = require('express');
const app = express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public",{index:"adminDashboard.html"}));
//app.use(express.static("public",{index:"demo.html"}));
//app.use(express.static("public"));
const adminRoutes = require("./routes/admin/adminRoute")
app.use('/',adminRoutes);
//}
app.listen(3000,()=>{
    console.log("Server start...");
})