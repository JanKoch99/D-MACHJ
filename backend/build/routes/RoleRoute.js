"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/** source/routes/posts.ts */
const express_1 = __importDefault(require("express"));
const role_controller_1 = __importDefault(require("../controllers/role.controller"));
const router = express_1.default.Router();
router.get('/role/:id', role_controller_1.default.getRole);
module.exports = router;
