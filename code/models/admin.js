class admin{
    // constructor(name,email_id,password,phone_no){
    //     this.name=name;
    //     this.email_id=email_id;
    //     this.password=password;
    //     this.phone_no=phone_no;
    // }
    constructor(name,userid,password,reenterPassword, phone, email){
        this.name = name;
        if(password==reenterPassword)
        this.login = {userid ,password};
        this.phone = phone;
        this.email = email;
        this.createdAt= new Date;
        this.updatedAt = new Date;
    }
}
module.exports=admin;