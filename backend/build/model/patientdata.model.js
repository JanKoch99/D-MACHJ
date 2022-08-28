"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientdataModel = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class PatientdataModel extends sequelize_1.Model {
}
exports.PatientdataModel = PatientdataModel;
PatientdataModel.init({
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    aftername: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medDataId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    prename: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'patient_data'
});
