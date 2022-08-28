"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const MedData_controller_1 = __importDefault(require("../controllers/MedData.controller"));
const router = express_1.default.Router();
//router.get('/posts', controller.getPosts); get ALl for history
router.get('/medData/:id', MedData_controller_1.default.getMedData);
router.put('/medData/:id', MedData_controller_1.default.updateMedData);
router.post('/medData', MedData_controller_1.default.createMedData);
module.exports = router;
