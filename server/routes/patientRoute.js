
const express = require("express");
const route = express.Router();
const patientController = require("../controllers/pateintController");

route.get("/pateintappnt", patientController.doctorDisplay );
route.post("/appntsave", patientController.patientSave );


module.exports = route;



