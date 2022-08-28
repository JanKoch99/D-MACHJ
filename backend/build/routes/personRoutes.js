"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const person_controller_1 = __importDefault(require("../controllers/person.controller"));
const router = express_1.default.Router();
router.get('/person/login', person_controller_1.default.getPerson);
router.get('/person/regristration', person_controller_1.default.createPerson);
module.exports = router;
