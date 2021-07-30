"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_module_1 = require("../task/task.module");
const user_module_1 = require("../user/user.module");
const project_repository_1 = require("./project.repository");
const project_controller_1 = require("./project.controller");
const project_service_1 = require("./project.service");
const jwt_1 = require("@nestjs/jwt");
const organization_module_1 = require("../organization/organization.module");
const role_repository_1 = require("../auth/repository/role.repository");
const auth_module_1 = require("../auth/auth.module");
const resource_repository_1 = require("../auth/repository/resource.repository");
const action_repository_1 = require("../auth/repository/action.repository");
let ProjectModule = class ProjectModule {
};
ProjectModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([project_repository_1.ProjectRepository, role_repository_1.RoleRepository, resource_repository_1.ResourceRepository, action_repository_1.ActionRepository]),
            common_1.forwardRef(() => user_module_1.UserModule),
            common_1.forwardRef(() => task_module_1.TaskModule),
            common_1.forwardRef(() => organization_module_1.OrganizationModule),
            auth_module_1.AuthModule,
            jwt_1.JwtModule.register({
                secret: 'SECRET',
                signOptions: { expiresIn: '60s' },
            }),
        ],
        providers: [project_service_1.ProjectService],
        controllers: [project_controller_1.ProjectController],
        exports: [project_service_1.ProjectService, typeorm_1.TypeOrmModule],
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map