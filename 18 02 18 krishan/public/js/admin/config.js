// app.value("REGISTERURL","http://localhost:3000/register");
// app.value("FINANCIALDETAILSURL","http://localhost:3000/financialdetails");
// app.value("COMPANYDETAILSURL","http://localhost:3000/companydetails");
// app.value("WEBSITECHECKURL","http://localhost:3000/websitecheck");

//app.value("URL","http://localhost:3000/js/json/fake.json");
//app.value("MENUURL","http://localhost:3000/js/json/menu.json");




const serverurl="http://localhost:1234";
app.value("SERVERURL",serverurl);
app.value("REGISTERURL",serverurl+"/register");
app.value("FINANCIALDETAILSURL",serverurl+"/financialdetails");
app.value("COMPANYDETAILSURL",serverurl+"/companydetails");
app.value("CARDDETAILSURL",serverurl+"/cardDetails")
app.value("WEBSITECHECKURL",serverurl+"/websitecheck");
app.constant("DATAURL",serverurl+"/js/json/fake.json");
app.constant("MENUURL",serverurl+"/js/json/menu.json");
app.value("GOOGLEMAPURL","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.863338632153!2d77.2888127439148!3d28.623292668741943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ae2432f233%3A0x5b32c73d97685357!2sVinod+Nagar%2C+Block+B%2C+Block+D%2C+West+Vinod+Nagar%2C+Delhi%2C+110092!5e0!3m2!1sen!2sin!4v1502618627486");





//const url="http://localhost:3000";
// app.value("REGISTERURL",url+"/register");
// app.value("FINANCIALDETAILSURL",url+"/financialdetails");
// app.value("COMPANYDETAILSURL",url+"/companydetails");
// app.value("CARDDETAILSURL",url+"/cardDetails");
// // app.value("IMAGEUPLOADURL",url+"/imageupload");