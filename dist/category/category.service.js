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
var CategoryService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const get_category_ro_1 = require("./ro/get-category.ro");
const handle_category_ro_1 = require("./ro/handle-category.ro");
const auth_service_1 = require("../auth/auth.service");
const action_repository_1 = require("../auth/repository/action.repository");
const resource_repository_1 = require("../auth/repository/resource.repository");
let CategoryService = CategoryService_1 = class CategoryService {
    constructor(repo, authService, actionRepo, resourceRepo) {
        this.repo = repo;
        this.authService = authService;
        this.actionRepo = actionRepo;
        this.resourceRepo = resourceRepo;
        this.logger = new common_1.Logger(CategoryService_1.name);
    }
    async getAllCategoryByIdProject(projectId) {
        const oldArray = await this.repo.getAll(projectId);
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const categoryRO = await this.getCategoryResponse(oldArray[i]);
            newArray.push(categoryRO);
        }
        return newArray;
    }
    async getOneById(projectId, id) {
        return await this.repo.getById(id, projectId);
    }
    async getOneByCode(projectId, code) {
        return await this.repo.getByCode(code, projectId);
    }
    async getOneByIdOrFail(projectId, id) {
        const category = await this.getOneById(id, projectId);
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async getOneByCodeOrFail(projectId, code) {
        const category = await this.getOneByCode(projectId, code);
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async getCategoryResponse(category) {
        const response = new get_category_ro_1.GetCategoryRO();
        response.name = category.name;
        response.code = category.code;
        response.description = category.description;
        return response;
    }
    async handleCategoryResponse(category) {
        const response = new handle_category_ro_1.HandleCategoryRO();
        response.name = category.name;
        response.code = category.code;
        response.description = category.description;
        return response;
    }
    async checkExistCode(projectId, code, id = null) {
        const count = await this.repo.countCategory(projectId, code, id);
        if (count > 0) {
            throw new common_1.BadRequestException('Code Exist');
        }
    }
    async isExistPermission(actionId, resourceId, roleId) {
        const isExistPermission = await this.authService.isExistPermission(actionId, resourceId, roleId);
        if (!isExistPermission) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async add(payload, projectId, dto) {
        const resourceId = await this.resourceRepo.getIdByCode('category');
        const actionId = await this.actionRepo.getIdByCode('create', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        await this.checkExistCode(projectId, dto.code);
        try {
            const newCategory = this.repo.create(dto);
            newCategory.projectId = projectId;
            await this.repo.save(newCategory);
            return this.handleCategoryResponse(newCategory);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async edit(payload, projectId, id, dto) {
        const resourceId = await this.resourceRepo.getIdByCode('category');
        const actionId = await this.actionRepo.getIdByCode('edit', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        const old = await this.getOneByIdOrFail(id, projectId);
        await this.checkExistCode(projectId, dto.code, id);
        try {
            const category = await this.repo.merge(old, dto);
            await this.repo.update(id, category);
            return this.handleCategoryResponse(category);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async delete(payload, projectId, id) {
        const resourceId = await this.resourceRepo.getIdByCode('category');
        const actionId = await this.actionRepo.getIdByCode('delete', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        const category = await this.getOneByIdOrFail(id, projectId);
        try {
            category.isDeleted = category.id;
            await this.repo.update(id, category);
            return id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
};
CategoryService = CategoryService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository,
        auth_service_1.AuthService,
        action_repository_1.ActionRepository,
        resource_repository_1.ResourceRepository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map