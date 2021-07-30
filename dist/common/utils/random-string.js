"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomString = void 0;
function RandomString(length) {
    let code = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return code;
}
exports.RandomString = RandomString;
//# sourceMappingURL=random-string.js.map