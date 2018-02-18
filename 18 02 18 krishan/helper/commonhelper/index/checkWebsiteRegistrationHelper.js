// const websiteRegisterModel = require("./models/websiteRegistration/websiteRegister");
// const websiteRegisterCrud=require('./db/crud/websiteregister/websiteregister');
// var websiteRegisterObject=new websiteRegisterModel();
// websiteRegisterCrud.checkWebsiteRegistration();
const companyDetailsSchema = require("../../../db/schema/companydetails/companydetailsSchema");
const companyDetailsModel = require("../../../models/companydetailsmodel/companyDetails");

// const websiteRegisterCrud = require('../../../db/crud/websiteregister/websiteregister');
let object = new companyDetailsModel();

const find = require("../../../db/common/crud/find");

//object.appInit("defaultuserid", "defaultpassword");
object.checkRegistered();
function start(response) {
    find(companyDetailsSchema, {}, [{ 'superuser.registered': true }], response, "Some error occured in database server", { redirectpath: '/demo.html' }, "Website/companydetails/superuser is already registered can't register again...");
}
module.exports = start;
