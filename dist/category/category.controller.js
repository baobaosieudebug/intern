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
exports.CategoryController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const add_category_dto_1 = require("./dto/add-category.dto");
const edit_category_dto_1 = require("./dto/edit-category.dto");
const payload_decorator_1 = require("../decorators/payload.decorator");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getAll(projectId) {
        return await this.categoryService.getAllCategoryByIdProject(projectId);
    }
    async getCategoryById(projectId, id) {
        const category = await this.categoryService.getOneByIdOrFail(projectId, id);
        return await this.categoryService.getCategoryResponse(category);
    }
    async getCategoryByCode(projectId, code) {
        const category = await this.categoryService.getOneByCodeOrFail(projectId, code);
        return await this.categoryService.getCategoryResponse(category);
    }
    async create(payload, projectId, dto) {
        return await this.categoryService.add(payload, projectId, dto);
    }
    async edit(payload, projectId, id, dto) {
        return await this.categoryService.edit(payload, projectId, id, dto);
    }
    async delete(payload, projectId, id) {
        return await this.categoryService.delete(payload, projectId, id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':id'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, common_1.Param('projectId')),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryByCode", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('projectId')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, add_category_dto_1.AddCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('projectId')),
    __param(2, common_1.Param('id')),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, edit_category_dto_1.EditCategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':id'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('projectId')),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
CategoryController = __decorate([
    swagger_1.ApiTags('Category'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('projects/:projectId/categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map