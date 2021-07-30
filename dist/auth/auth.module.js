"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const user_module_1 = require("../user/user.module");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const config_module_1 = require("../config/config.module");
const multer_1 = require("@nestjs/platform-express/multer");
const organization_module_1 = require("../organization/organization.module");
const typeorm_1 = require("@nestjs/typeorm");
const permission_repository_1 = require("./repository/permission.repository");
const action_repository_1 = require("./repository/action.repository");
const resource_repository_1 = require("./repository/resource.repository");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([permission_repository_1.PermissionRepository, action_repository_1.ActionRepository, resource_repository_1.ResourceRepository]),
            passport_1.PassportModule,
            common_1.forwardRef(() => user_module_1.UserModule),
            common_1.forwardRef(() => organization_module_1.OrganizationModule),
            config_module_1.ConfigModule.forRoot(),
            common_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            }),
            multer_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './upload',
                }),
            }),
            jwt_1.JwtModule.register({
                secret: 'SECRET',
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map