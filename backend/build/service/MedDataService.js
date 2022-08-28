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
exports.MedDataService = void 0;
const medData_model_1 = require("../model/medData.model");
const shinanigans_1 = require("../shinanigans");
class MedDataService {
    static getMedData(medDataId) {
        return __awaiter(this, void 0, void 0, function* () {
            return medData_model_1.MedData.findByPk(medDataId)
                .then((found) => {
                if (found) {
                    return Promise.resolve(found);
                }
                else {
                    return Promise.reject("MedData not found");
                }
            })
                .catch(() => {
                return Promise.reject('Could not fetch medData');
            });
        });
    }
    static updateMedData(medDataId) {
        return __awaiter(this, void 0, void 0, function* () {
            return medData_model_1.MedData.findByPk(medDataId).then((found) => {
                if (found != null) {
                    return this.updateAmount(found)
                        .then(update => {
                        return Promise.resolve(update);
                    })
                        .catch(err => {
                        return Promise.reject(err);
                    });
                }
            });
        });
    }
    static updateAmount(receipt) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, shinanigans_1.isNewerDate)(receipt.validUntil, new Date())) {
                return Promise.reject('Medicalprescription is not valid.');
            }
            else if (receipt.amountLeft < 1) {
                return Promise.reject('Already been redeemed ' + receipt.amountLeft + '/' + receipt.originalAmount + ' times.');
            }
            else {
                let newAmount = receipt.amountLeft - 1;
                return receipt.update({ amountLeft: newAmount })
                    .then(() => {
                    if (newAmount === 0) {
                        return Promise.resolve('The medicalprescription has been used up.');
                    }
                    else {
                        return Promise.resolve('This prescription has been used ' + newAmount + '/' + receipt.originalAmount + ' times.');
                    }
                })
                    .catch(() => {
                    return Promise.reject('Failed to update amount.');
                });
            }
        });
    }
    static createMedData(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return medData_model_1.MedData.create({
                id: 0,
                doctorId: body.doctorId,
                dateOfIssue: body.dateOfIssue,
                drug: body.drug,
                validUntil: body.validUntil,
                useCase: body.useCase,
                originalAmount: body.originalAmount,
                amountLeft: body.originalAmount,
                patientDataId: body.personId
            }).then(() => {
                return Promise.resolve('Entry successfully created');
            }).catch(() => {
                return Promise.reject('Could not create entry');
            });
        });
    }
}
exports.MedDataService = MedDataService;
