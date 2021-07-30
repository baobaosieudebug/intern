"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_repository_1 = require("./repository/user.repository");
const group_module_1 = require("../group/group.module");
const task_module_1 = require("../task/task.module");
const project_module_1 = require("../project/project.module");
const organization_module_1 = require("../organization/organization.module");
const mail_module_1 = require("../mail/mail.module");
const user_organization_repository_1 = require("./repository/user-organization.repository");
const user_project_repository_1 = require("./repository/user-project.repository");
const user_role_repository_1 = require("./repository/user-role.repository");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository, user_organization_repository_1.UserOrganizationRepository, user_project_repository_1.UserProjectRepository, user_role_repository_1.UserRoleRepository]),
            common_1.HttpModule,
            task_module_1.TaskModule,
            group_module_1.GroupsModule,
            common_1.forwardRef(() => project_module_1.ProjectModule),
            common_1.forwardRef(() => organization_module_1.OrganizationModule),
            mail_module_1.MailModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService, typeorm_1.TypeOrmModule],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map