"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = exports.authConfigSchema = void 0;
const Joi = require("@hapi/joi");
exports.authConfigSchema = {
    AUTH_PWD_PEPPER: Joi.string().default('secretPepper'),
    JWT_ACCESS_SECRET_KEY: Joi.string().default('SECRET_KEY'),
    JWT_ACCESS_KEY_LIFE_TIME: Joi.string().default('600s'),
};
function authConfig() {
    return {
        auth: {
            pwd: {
                pepper: process.env.AUTH_PWD_PEPPER,
            },
            jwt: {
                accessSecretKey: process.env.JWT_ACCESS_SECRET_KEY,
                accessKeyLifeTime: process.env.JWT_ACCESS_KEY_LIFE_TIME,
            },
        },
    };
}
exports.authConfig = authConfig;
//# sourceMappingURL=auth.config.js.map