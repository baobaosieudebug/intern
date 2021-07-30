"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const type_repository_1 = require("./type.repository");
const type_service_1 = require("./type.service");
const type_controller_1 = require("./type.controller");
const project_module_1 = require("../project/project.module");
const project_middleware_1 = require("../common/middleware/project.middleware");
let TypeModule = class TypeModule {
    configure(consumer) {
        consumer.apply(project_middleware_1.ProjectMiddleware).forRoutes(type_controller_1.TypeController);
    }
};
TypeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([type_repository_1.TypeRepository]), project_module_1.ProjectModule],
        providers: [type_service_1.TypeService],
        controllers: [type_controller_1.TypeController],
        exports: [type_service_1.TypeService],
    })
], TypeModule);
exports.TypeModule = TypeModule;
//# sourceMappingURL=type.module.js.map