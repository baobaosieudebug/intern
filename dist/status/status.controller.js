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
exports.StatusController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
const add_status_dto_1 = require("./dto/add-status.dto");
const edit_status_dto_1 = require("./dto/edit-status.dto");
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    async getAll(projectId) {
        return await this.statusService.getAllStatusByIdProject(projectId);
    }
    async getStatusById(projectId, id) {
        const status = await this.statusService.getOneByIdOrFail(projectId, id);
        return await this.statusService.getStatusResponse(status);
    }
    async getStatusByCode(projectId, code) {
        const status = await this.statusService.getOneByCodeOrFail(projectId, code);
        return await this.statusService.getStatusResponse(status);
    }
    async create(projectId, dto) {
        return await this.statusService.add(projectId, dto);
    }
    async edit(projectId, id, dto) {
        return await this.statusService.edit(projectId, id, dto);
    }
    async delete(projectId, id) {
        return await this.statusService.delete(projectId, id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "getStatusById", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "getStatusByCode", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_status_dto_1.AddStatusDTO]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, edit_status_dto_1.EditStatusDTO]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "delete", null);
StatusController = __decorate([
    swagger_1.ApiTags('Status'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('projects/:projectId/categories'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
exports.StatusController = StatusController;
//# sourceMappingURL=status.controller.js.map