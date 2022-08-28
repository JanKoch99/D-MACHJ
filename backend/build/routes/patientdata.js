"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const patientdata_controller_1 = __importDefault(require("../controllers/patientdata.controller"));
const router = express_1.default.Router();
router.get('/patientdata/:id', patientdata_controller_1.default.getPatientData);
router.post('/patientdata/create', patientdata_controller_1.default.createPatientData);
module.exports = router;
