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
exports.PersonService = void 0;
const person_model_1 = require("../model/person.model");
const role_model_1 = require("../model/role.model");
class PersonService {
    static getPerson(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return person_model_1.Person.findByPk(body.mail)
                .then((person) => {
                if (person) {
                    return Promise.resolve(person);
                }
                else {
                    return Promise.reject("Person not found");
                }
            })
                .catch(() => {
                return Promise.reject('Could not fetch person data');
            });
        });
    }
    static createPerson(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return person_model_1.Person.create({
                id: 0,
                userName: body.userName,
                password: body.password,
                roleId: body.roleId,
            }).then((data) => {
                if (data.roleId !== null) {
                    return role_model_1.Role.create({
                        id: data.id,
                        auth: data.roleId
                    });
                }
            }).catch((err) => {
                return Promise.reject(err);
            });
        });
    }
}
exports.PersonService = PersonService;
