"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payload_decorator_1 = require("../decorators/payload.decorator");
const project_service_1 = require("./project.service");
const add_project_dto_1 = require("./dto/add-project.dto");
const edit_project_dto_1 = require("./dto/edit-project.dto");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async getListUserByUser(payload, projectCode) {
        return await this.projectService.getListUserByUser(payload, projectCode);
    }
    async getInfo(payload, code) {
        return await this.projectService.getInfo(payload, code);
    }
    async create(payload, dto) {
        return await this.projectService.create(payload, dto);
    }
    async addUser(payload, projectCode, id) {
        return await this.projectService.addUser(payload, projectCode, id);
    }
    async getListUser(payload, code) {
        return await this.projectService.getListUser(payload, code);
    }
    async getList(payload) {
        return await this.projectService.getList(payload);
    }
    async getListAdmin(payload, code) {
        return await this.projectService.getListAdmin(payload, code);
    }
    async edit(payload, code, dto) {
        return await this.projectService.edit(payload, code, dto);
    }
    async delete(payload, code) {
        return await this.projectService.delete(payload, code);
    }
};
__decorate([
    common_1.Get('users'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Query('projectCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getListUserByUser", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getInfo", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_project_dto_1.AddProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Post(':projectCode/users/:id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('projectCode')),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addUser", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code/users'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getListUser", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, payload_decorator_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getList", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code/admins'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getListAdmin", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':code'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, edit_project_dto_1.EditProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':code'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "delete", null);
ProjectController = __decorate([
    swagger_1.ApiTags('Project'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map