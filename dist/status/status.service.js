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
var StatusService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const status_repository_1 = require("./status.repository");
const get_status_ro_1 = require("./ro/get-status.ro");
const handle_status_ro_1 = require("./ro/handle-status.ro");
let StatusService = StatusService_1 = class StatusService {
    constructor(repo) {
        this.repo = repo;
        this.logger = new common_1.Logger(StatusService_1.name);
    }
    async getAllStatusByIdProject(projectId) {
        const oldArray = await this.repo.getAll(projectId);
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const statusRO = await this.getStatusResponse(oldArray[i]);
            newArray.push(statusRO);
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
        const status = await this.getOneById(id, projectId);
        if (!status) {
            throw new common_1.NotFoundException('Status not found');
        }
        return status;
    }
    async getOneByCodeOrFail(projectId, code) {
        const status = await this.getOneByCode(projectId, code);
        if (!status) {
            throw new common_1.NotFoundException('Status not found');
        }
        return status;
    }
    async getStatusResponse(status) {
        const response = new get_status_ro_1.GetStatusRO();
        response.name = status.name;
        response.code = status.code;
        response.description = status.description;
        return response;
    }
    async handleStatusResponse(status) {
        const response = new handle_status_ro_1.HandleStatusRO();
        response.name = status.name;
        response.code = status.code;
        response.description = status.description;
        return response;
    }
    async checkExistCode(projectId, code, id = null) {
        const count = await this.repo.countStatus(projectId, code, id);
        if (count > 0) {
            throw new common_1.BadRequestException('Code Exist');
        }
    }
    async add(projectId, dto) {
        await this.checkExistCode(projectId, dto.code);
        try {
            const newStatus = this.repo.create(dto);
            newStatus.projectId = projectId;
            await this.repo.save(newStatus);
            return this.handleStatusResponse(newStatus);
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
            const status = await this.repo.merge(old, dto);
            await this.repo.update(id, status);
            return this.handleStatusResponse(status);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async delete(projectId, id) {
        const status = await this.getOneByIdOrFail(id, projectId);
        try {
            status.isDeleted = status.id;
            await this.repo.update(id, status);
            return id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
};
StatusService = StatusService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [status_repository_1.StatusRepository])
], StatusService);
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map