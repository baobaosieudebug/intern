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
exports.TypeController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const type_service_1 = require("./type.service");
const add_type_dto_1 = require("./dto/add-type.dto");
const edit_type_dto_1 = require("./dto/edit-type.dto");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    async getAll(projectId) {
        return await this.typeService.getAllTypeByIdProject(projectId);
    }
    async getTypeById(projectId, id) {
        const type = await this.typeService.getOneByIdOrFail(projectId, id);
        return await this.typeService.getTypeResponse(type);
    }
    async getTypeByCode(projectId, code) {
        const type = await this.typeService.getOneByCodeOrFail(projectId, code);
        return await this.typeService.getTypeResponse(type);
    }
    async create(projectId, dto) {
        return await this.typeService.add(projectId, dto);
    }
    async edit(projectId, id, dto) {
        return await this.typeService.edit(projectId, id, dto);
    }
    async delete(projectId, id) {
        return await this.typeService.delete(projectId, id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getTypeById", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "getTypeByCode", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, add_type_dto_1.AddTypeDTO]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, edit_type_dto_1.EditTypeDTO]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "delete", null);
TypeController = __decorate([
    swagger_1.ApiTags('Type'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('projects/:projectId/categories'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map