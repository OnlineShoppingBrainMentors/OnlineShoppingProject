class adminReg{
    constructor(name,userid,password,reenterPassword,phoneno,dob,photo,signature){
           this.name = name;
          // if(password==reenterPassword)
           // this.login = {userid ,password};
           this.userid=userid;
           this.password = password;
           this.phoneno=phoneno;
           this.dob=dob;
           this.photo=photo;
           this.signature=signature;

    }
}
module.exports = adminReg;