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
var TypeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const type_repository_1 = require("./type.repository");
const get_type_ro_1 = require("./ro/get-type.ro");
const handle_type_ro_1 = require("./ro/handle-type.ro");
let TypeService = TypeService_1 = class TypeService {
    constructor(repo) {
        this.repo = repo;
        this.logger = new common_1.Logger(TypeService_1.name);
    }
    async getAllTypeByIdProject(projectId) {
        const oldArray = await this.repo.getAll(projectId);
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const typeRO = await this.getTypeResponse(oldArray[i]);
            newArray.push(typeRO);
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
        const type = await this.getOneById(id, projectId);
        if (!type) {
            throw new common_1.NotFoundException('Type not found');
        }
        return type;
    }
    async getOneByCodeOrFail(projectId, code) {
        const type = await this.getOneByCode(projectId, code);
        if (!type) {
            throw new common_1.NotFoundException('Type not found');
        }
        return type;
    }
    async getTypeResponse(type) {
        const response = new get_type_ro_1.GetTypeRO();
        response.name = type.name;
        response.code = type.code;
        response.description = type.description;
        return response;
    }
    async handleTypeResponse(type) {
        const response = new handle_type_ro_1.HandleTypeRO();
        response.name = type.name;
        response.code = type.code;
        response.description = type.description;
        return response;
    }
    async checkExistCode(projectId, code, id = null) {
        const count = await this.repo.countType(projectId, code, id);
        if (count > 0) {
            throw new common_1.BadRequestException('Code Exist');
        }
    }
    async add(projectId, dto) {
        await this.checkExistCode(projectId, dto.code);
        try {
            const newType = this.repo.create(dto);
            newType.projectId = projectId;
            await this.repo.save(newType);
            return this.handleTypeResponse(newType);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async edit(projectId, id, dto) {
        const old = await this.getOneByIdOrFail(id, projectId);
        await this.checkExistCode(projectId, dto.code, id);
        try {
            const type = await this.repo.merge(old, dto);
            await this.repo.update(id, type);
            return this.handleTypeResponse(type);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async delete(projectId, id) {
        const type = await this.getOneByIdOrFail(id, projectId);
        try {
            type.isDeleted = type.id;
            await this.repo.update(id, type);
            return id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
};
TypeService = TypeService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [type_repository_1.TypeRepository])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map