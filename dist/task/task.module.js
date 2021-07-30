"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_controller_1 = require("./task.controller");
const task_respository_1 = require("./task.respository");
const task_service_1 = require("./task.service");
const organization_module_1 = require("../organization/organization.module");
const project_module_1 = require("../project/project.module");
const auth_module_1 = require("../auth/auth.module");
let TaskModule = class TaskModule {
};
TaskModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([task_respository_1.TaskRepository]),
            organization_module_1.OrganizationModule,
            common_1.forwardRef(() => project_module_1.ProjectModule),
            auth_module_1.AuthModule,
        ],
        providers: [task_service_1.TaskService],
        controllers: [task_controller_1.TaskController],
        exports: [task_service_1.TaskService, typeorm_1.TypeOrmModule],
    })
], TaskModule);
exports.TaskModule = TaskModule;
//# sourceMappingURL=task.module.js.map