"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MedDataService_1 = require("../service/MedDataService");
/*
// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};
 */
// getting a single receipt
const getMedData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield MedDataService_1.MedDataService.getMedData(Number(req.params.id))
        .then(post => res.json(post))
        .catch(err => res.json(err));
});
// updating a validity of a receipt
const updateMedData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield MedDataService_1.MedDataService.updateMedData(Number(req.params.id))
        .then(post => res.json(post))
        .catch(err => res.json(err));
});
// adding a receipt
const createMedData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield MedDataService_1.MedDataService.createMedData(req.body)
        .then(post => res.json(post))
        .catch(err => res.json(err));
});
exports.default = { getMedData, updateMedData, createMedData };
