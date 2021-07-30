"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const auth_config_1 = require("./auth.config");
const database_config_1 = require("./database.config");
let ConfigModule = ConfigModule_1 = class ConfigModule {
    static forRoot() {
        return {
            module: ConfigModule_1,
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    load: [auth_config_1.authConfig, database_config_1.databaseConfig],
                    validationSchema: Joi.object(Object.assign(Object.assign({}, auth_config_1.authConfigSchema), database_config_1.databaseConfigSchema)),
                }),
            ],
            providers: [config_1.ConfigService],
            exports: [config_1.ConfigService],
        };
    }
};
ConfigModule = ConfigModule_1 = __decorate([
    common_1.Module({})
], ConfigModule);
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=config.module.js.map