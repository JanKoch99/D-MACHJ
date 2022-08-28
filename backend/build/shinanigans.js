"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewerDate = void 0;
function isNewerDate(dateOld, dateNew) {
    var tempDateOld = new Date(dateOld);
    var tempDateNew = new Date(dateNew);
    if (tempDateOld.getFullYear() < tempDateNew.getFullYear()) {
        return false;
    }
    if (tempDateOld.getMonth() < tempDateNew.getMonth()) {
        return false;
    }
    if (tempDateOld.getDay() < tempDateNew.getDay()) {
        return false;
    }
    return true;
}
exports.isNewerDate = isNewerDate;
