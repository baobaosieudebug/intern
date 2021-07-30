"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const status_repository_1 = require("./status.repository");
const status_service_1 = require("./status.service");
const status_controller_1 = require("./status.controller");
const project_module_1 = require("../project/project.module");
const project_middleware_1 = require("../common/middleware/project.middleware");
let StatusModule = class StatusModule {
    configure(consumer) {
        consumer.apply(project_middleware_1.ProjectMiddleware).forRoutes(status_controller_1.StatusController);
    }
};
StatusModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([status_repository_1.StatusRepository]), project_module_1.ProjectModule],
        providers: [status_service_1.StatusService],
        controllers: [status_controller_1.StatusController],
        exports: [status_service_1.StatusService],
    })
], StatusModule);
exports.StatusModule = StatusModule;
//# sourceMappingURL=status.module.js.map