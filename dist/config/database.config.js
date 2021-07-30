"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = exports.databaseConfigSchema = void 0;
const Joi = require("@hapi/joi");
exports.databaseConfigSchema = {
    DATABASE_HOST: Joi.string().default('localhost'),
    DATABASE_PORT: Joi.string().default('3307'),
    DATABASE_TYPE: Joi.string().default('mysql'),
    DATABASE_USERNAME: Joi.string().default('root'),
    DATABASE_PASSWORD: Joi.string().default('secret'),
    DATABASE_DB: Joi.string().default('blogdb'),
    DATABASE_LOGGING: Joi.boolean().default(true),
};
function databaseConfig() {
    return {
        db: {
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10),
            type: process.env.DATABASE_TYPE,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DB,
            logging: process.env.DATABASE_LOGGING + ''.toLowerCase() === 'true',
        },
    };
}
exports.databaseConfig = databaseConfig;
//# sourceMappingURL=database.config.js.map