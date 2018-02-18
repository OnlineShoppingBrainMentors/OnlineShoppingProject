const companyDetailsSchema = require("../../../db/schema/companydetails/companydetailsSchema");
const companyDetailsModel = require("../../../models/companydetailsmodel/companyDetails");

let object = new companyDetailsModel();
const configuration = require("./../../../db/config");
object.appInit(configuration.defaultsuperuserid, configuration.defaultsuperuserpassword);

const create = require("../../../db/common/crud/create");
function start() {
    create(companyDetailsSchema, object, {}, { message: "error initializing app" }, "success");
}

module.exports = start;