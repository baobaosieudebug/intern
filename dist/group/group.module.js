"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const group_controller_1 = require("./group.controller");
const group_service_1 = require("./group.service");
const group_repository_1 = require("./group.repository");
const user_module_1 = require("../user/user.module");
let GroupsModule = class GroupsModule {
};
GroupsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([group_repository_1.GroupRepository]), common_1.forwardRef(() => user_module_1.UserModule)],
        controllers: [group_controller_1.GroupsController],
        providers: [group_service_1.GroupsService],
        exports: [group_service_1.GroupsService, typeorm_1.TypeOrmModule],
    })
], GroupsModule);
exports.GroupsModule = GroupsModule;
//# sourceMappingURL=group.module.js.map