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
var VersionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionService = void 0;
const common_1 = require("@nestjs/common");
const version_repository_1 = require("./version.repository");
const get_version_ro_1 = require("./ro/get-version.ro");
const handle_version_ro_1 = require("./ro/handle-version.ro");
let VersionService = VersionService_1 = class VersionService {
    constructor(repo) {
        this.repo = repo;
        this.logger = new common_1.Logger(VersionService_1.name);
    }
    async getAllVersionByIdProject(projectId) {
        const oldArray = await this.repo.getAll(projectId);
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const versionRO = await this.getVersionResponse(oldArray[i]);
            newArray.push(versionRO);
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
        const version = await this.getOneById(id, projectId);
        if (!version) {
            throw new common_1.NotFoundException('Version not found');
        }
        return version;
    }
    async getOneByCodeOrFail(projectId, code) {
        const version = await this.getOneByCode(projectId, code);
        if (!version) {
            throw new common_1.NotFoundException('Version not found');
        }
        return version;
    }
    async getVersionResponse(version) {
        const response = new get_version_ro_1.GetVersionRO();
        response.name = version.name;
        response.code = version.code;
        response.description = version.description;
        return response;
    }
    async handleVersionResponse(version) {
        const response = new handle_version_ro_1.HandleVersionRO();
        response.name = version.name;
        response.code = version.code;
        response.description = version.description;
        return response;
    }
    async checkExistCode(projectId, code, id = null) {
        const count = await this.repo.countVersion(projectId, code, id);
        if (count > 0) {
            throw new common_1.BadRequestException('Code Exist');
        }
    }
    async add(projectId, dto) {
        await this.checkExistCode(projectId, dto.code);
        try {
            const newVersion = this.repo.create(dto);
            newVersion.projectId = projectId;
            await this.repo.save(newVersion);
            return this.handleVersionResponse(newVersion);
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
            const version = await this.repo.merge(old, dto);
            await this.repo.update(id, version);
            return this.handleVersionResponse(version);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async delete(projectId, id) {
        const version = await this.getOneByIdOrFail(id, projectId);
        try {
            version.isDeleted = version.id;
            await this.repo.update(id, version);
            return id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
};
VersionService = VersionService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [version_repository_1.VersionRepository])
], VersionService);
exports.VersionService = VersionService;
//# sourceMappingURL=version.service.js.map