"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.sucessResponse = void 0;
const sucessResponse = (message, data) => {
    return {
        success: true,
        message,
        data,
    };
};
exports.sucessResponse = sucessResponse;
const errorResponse = (message, data) => {
    return {
        success: false,
        message,
        data,
    };
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=commonfunction.js.map