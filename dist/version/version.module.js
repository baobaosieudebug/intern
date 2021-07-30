"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const version_repository_1 = require("./version.repository");
const version_service_1 = require("./version.service");
const version_controller_1 = require("./version.controller");
const project_module_1 = require("../project/project.module");
const project_middleware_1 = require("../common/middleware/project.middleware");
let VersionModule = class VersionModule {
    configure(consumer) {
        consumer.apply(project_middleware_1.ProjectMiddleware).forRoutes(version_controller_1.VersionController);
    }
};
VersionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([version_repository_1.VersionRepository]), project_module_1.ProjectModule],
        providers: [version_service_1.VersionService],
        controllers: [version_controller_1.VersionController],
        exports: [version_service_1.VersionService],
    })
], VersionModule);
exports.VersionModule = VersionModule;
//# sourceMappingURL=version.module.js.map