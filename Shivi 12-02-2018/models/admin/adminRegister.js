class adminReg{
    constructor(name,userid,registrationuserid,oldpassword,password,reenterPassword,phoneno,dob){
           this.name = name;
          // if(password==reenterPassword)
           // this.login = {userid ,password};
           this.userid=userid;
           this.registrationuserid=registrationuserid;
           this.oldpassword=oldpassword;
           this.password = password;
           this.phoneno=phoneno;
           this.dob=dob;
           
          /* this.photo=photo;
           this.signature=signature;*/

    }
}
module.exports = adminReg;