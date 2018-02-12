class companydetails{
    superusersetter(name1,email1,password1,phone1,dateofbirth1){
        this.superuser={
        registered:true,
         name: name1,
         phone:phone1,
         email: email1,
         password: password1,
         dateofbirth:dateofbirth1
        };
    }
 }
 module.exports = companydetails;