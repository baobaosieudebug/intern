"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const group_module_1 = require("./group/group.module");
const auth_module_1 = require("./auth/auth.module");
const config_module_1 = require("./config/config.module");
const database_module_1 = require("./database/database.module");
const task_module_1 = require("./task/task.module");
const project_module_1 = require("./project/project.module");
const organization_module_1 = require("./organization/organization.module");
const category_module_1 = require("./category/category.module");
const type_module_1 = require("./type/type.module");
const status_module_1 = require("./status/status.module");
const version_module_1 = require("./version/version.module");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule.forRoot(),
            config_module_1.ConfigModule.forRoot(),
            common_1.CacheModule.register({ ttl: 604800, max: 100000 }),
            user_module_1.UserModule,
            group_module_1.GroupsModule,
            auth_module_1.AuthModule,
            common_1.HttpModule,
            task_module_1.TaskModule,
            project_module_1.ProjectModule,
            organization_module_1.OrganizationModule,
            category_module_1.CategoryModule,
            type_module_1.TypeModule,
            status_module_1.StatusModule,
            version_module_1.VersionModule,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.CacheInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map