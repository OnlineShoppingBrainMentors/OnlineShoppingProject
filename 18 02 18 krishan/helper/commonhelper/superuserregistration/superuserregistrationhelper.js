function start(companydetailsObject, registrationuserid, oldpassword, response) {
    let superusersettercondition = {};
    let superusersetterandcondition = [{ 'superuser.email': registrationuserid }, { 'superuser.registered': false }, { 'superuser.password': oldpassword }];

    let superusersetterorcondition = [];
    console.log("andcondition object : ");
    console.log(superusersetterandcondition);
    let superusersettersuccess = { result: true, message: 'Registered Successfully' };
    let superusersetterfail = { result: false, message: 'Error Registering User' };
    let superusersettererror = { result: undefined, message: 'Some Database Server error' };


    console.log("Inside router.post");
    console.log(companydetailsObject);
    const adminOperations = require('../../../db/crud/admin/adminCrud');
    adminOperations.update(companydetailsObject, superusersettercondition, superusersetterandcondition, superusersetterorcondition, response, superusersettersuccess, superusersetterfail, superusersettererror);

}
module.exports = start