const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const adminRoutes = require("./routes/admin/adminRoute");
// app.use(express.static("public",{index:"categories.html"}));
// app.use(express.static("public",{index:"demo.html"}));
app.use(express.static("public"));
app.use('/', adminRoutes);

const configuration = require("./db/config");
// app.listen(3000,()=>{
app.listen(configuration.port, () => {
    console.log("Application started");
});
//Initialize Application with default entries in db
const initApplication = require('./helper/commonhelper/initApplication/initApplicationHelper');
initApplication();
