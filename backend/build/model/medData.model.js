"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedData = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class MedData extends sequelize_1.Model {
}
exports.MedData = MedData;
MedData.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    doctorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    dateOfIssue: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    drug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    validUntil: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    useCase: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    originalAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    amountLeft: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    patientDataId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'med_data'
});
