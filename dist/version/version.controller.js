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
exports.VersionController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const version_service_1 = require("./version.service");
const add_version_dto_1 = require("./dto/add-version.dto");
const edit_version_dto_1 = require("./dto/edit-version.dto");
let VersionController = class VersionController {
    constructor(versionService) {
        this.versionService = versionService;
    }
    async getAll(projectId) {
        return await this.versionService.getAllVersionByIdProject(projectId);
    }
    async getVersionById(projectId, id) {
        const version = await this.versionService.getOneByIdOrFail(projectId, id);
        return await this.versionService.getVersionResponse(version);
    }
    async getVersionByCode(projectId, code) {
        const version = await this.versionService.getOneByCodeOrFail(projectId, code);
        return await this.versionService.getVersionResponse(version);
    }
    async create(projectId, dto) {
        return await this.versionService.add(projectId, dto);
    }
    async edit(projectId, id, dto) {
        return await this.versionService.edit(projectId, id, dto);
    }
    async delete(projectId, id) {
        return await this.versionService.delete(projectId, id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "getVersionById", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "getVersionByCode", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_version_dto_1.AddVersionDTO]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, edit_version_dto_1.EditVersionDTO]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], VersionController.prototype, "delete", null);
VersionController = __decorate([
    swagger_1.ApiTags('Version'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('projects/:projectId/categories'),
    __metadata("design:paramtypes", [version_service_1.VersionService])
], VersionController);
exports.VersionController = VersionController;
//# sourceMappingURL=version.controller.js.map