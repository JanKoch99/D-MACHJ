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
exports.PatientdataService = void 0;
const patientdata_model_1 = require("../model/patientdata.model");
class PatientdataService {
    static getPatientData(patientId) {
        return __awaiter(this, void 0, void 0, function* () {
            return patientdata_model_1.PatientdataModel.findByPk(patientId)
                .then((patient) => {
                if (patient) {
                    return Promise.resolve(patient);
                }
                else {
                    return Promise.reject("Patient not found");
                }
            })
                .catch(() => {
                return Promise.reject('Could not fetch patient data');
            });
        });
    }
    static createPatientData(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return patientdata_model_1.PatientdataModel.create({
                id: 0,
                medDataId: body.medDataId,
                prename: body.prename,
                aftername: body.aftername,
                birthday: body.birthday,
                sex: body.sex,
                address: body.address,
                zip: body.zip,
                city: body.city,
            }).then(() => {
                return Promise.resolve('Entry successfully created');
            }).catch(() => {
                return Promise.reject('Could not create entry');
            });
        });
    }
}
exports.PatientdataService = PatientdataService;
