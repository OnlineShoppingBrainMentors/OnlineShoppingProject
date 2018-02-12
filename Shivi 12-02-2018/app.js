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
 /*------------------*/
//   const multer=require('multer');
//   const path=require('path');
//   const storage=multer.diskStorage({
//     destination:'./public/uploads/',
//     filename:function(req,file,cb){
//       console.log(file);
//        cb(null,file.fieldname + "-" +Date.now()+path.extname(file.originalname));
//       cb(null,file.fieldname + "-" +Date.now());
//     }
//     });
//    //Init Upload
//    const upload=multer({
//      storage: storage,
//      limits:{filesize:10000},
//      fileFilter: function(req, file, cb) {
//          checkFileType(file,cb);
//      }
//    }).array('carouselimage');

//    function checkFileType(file,cb){ 
//       // Allowed ext
//       var filetypes = /jpeg|jpg|png|gif/;
//       // Check mime
//       var mimetype = filetypes.test(file.mimetype);
//       // Check ext
//       var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//       if (mimetype && extname) {
//         return cb(null, true);
//       } else{ 
//       cb("Error: File upload only supports the following filetypes - " + filetypes);
//       cb("Error:Images Only!");
//     }
//   }

//   app.post('/imageupload',(req,res)=>{
//     upload(req,res,function(err) {
//       if(err) {
//         return res.end("Error uploading file.");
//     }
//     else{
//        /* if(req.file==undefined){
//    res.render('./public/views/admin/imageupload');
//     }*/
//       // else{
//            console.log(req.files);
//       // message:'File uploaded successfully' 
//     res.end("File is uploaded");
//        //}
//     }
//   });
//    });

/*-----------------------*/



app.use(express.static("public",{index:"demo.html"}));
const adminRoutes = require("./routes/admin/adminRoute")
app.use('/',adminRoutes);
//}
app.listen(3000,()=>{
    console.log("Server start...");
})