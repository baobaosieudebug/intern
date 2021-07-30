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
var TaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const organization_service_1 = require("../organization/organization.service");
const project_service_1 = require("../project/project.service");
const task_respository_1 = require("./task.respository");
const task_ro_1 = require("./ro/task.ro");
const auth_service_1 = require("../auth/auth.service");
const action_repository_1 = require("../auth/repository/action.repository");
const resource_repository_1 = require("../auth/repository/resource.repository");
let TaskService = TaskService_1 = class TaskService {
    constructor(repo, orgService, projectService, authService, actionRepo, resourceRepo) {
        this.repo = repo;
        this.orgService = orgService;
        this.projectService = projectService;
        this.authService = authService;
        this.actionRepo = actionRepo;
        this.resourceRepo = resourceRepo;
        this.logger = new common_1.Logger(TaskService_1.name);
    }
    async mappingTaskRO(task) {
        const response = new task_ro_1.TaskRO();
        response.name = task.name;
        response.code = task.code;
        response.description = task.description;
        response.dateBegin = task.dateBegin;
        response.dateEnd = task.dateEnd;
        return response;
    }
    async mappingListTaskRO(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const taskRO = await this.mappingTaskRO(oldArray[i]);
            newArray.push(taskRO);
        }
        return newArray;
    }
    async getAll(payload, projectCode) {
        const project = await this.projectService.getOneByCodeOrFail(projectCode);
        if (payload.roles === 'user') {
            await this.orgService.isOwner(payload);
        }
        await this.projectService.isProjectExist(payload, projectCode);
        try {
            const oldArray = await this.repo.getAll(project.id);
            return this.mappingListTaskRO(oldArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async isTaskExist(code, projectId) {
        const isTaskExist = await this.repo.isExistTaskCode(code, projectId);
        if (isTaskExist) {
            throw new common_1.BadRequestException('Code must be unique in project');
        }
    }
    async isExistPermission(actionId, resourceId, roleId) {
        const isExistPermission = await this.authService.isExistPermission(actionId, resourceId, roleId);
        if (!isExistPermission) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async create(payload, projectCode, dto) {
        const resourceId = await this.resourceRepo.getIdByCode('task');
        const actionId = await this.actionRepo.getIdByCode('create', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        const project = await this.projectService.getOneByCodeOrFail(projectCode);
        await this.isTaskExist(dto.code, project.id);
        try {
            const task = this.repo.create(dto);
            task.createdAt = new Date();
            task.createUserId = payload.id;
            task.projectId = project.id;
            await this.repo.save(task);
            return this.mappingTaskRO(task);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async delete(payload, code) {
        const resourceId = await this.resourceRepo.getIdByCode('task');
        const actionId = await this.actionRepo.getIdByCode('delete', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        const task = await this.getOneByCode(code);
        try {
            task.isDeleted = payload.id;
            await this.repo.update(task.id, task);
            return task.id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getOneById(id) {
        return await this.repo.getById(id);
    }
    async getOneByIdOrFail(id) {
        const task = await this.getOneById(id);
        if (!task) {
            throw new common_1.NotFoundException('Task Not Found');
        }
        return task;
    }
    async getOneByCode(code) {
        return await this.repo.getByCode(code);
    }
    async edit(payload, projectCode, id, dto) {
        const resourceId = await this.resourceRepo.getIdByCode('task');
        const actionId = await this.actionRepo.getIdByCode('edit', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        const project = await this.projectService.getOneByCodeOrFail(projectCode);
        await this.projectService.isProjectExist(payload, projectCode);
        const old = await this.getOneByIdOrFail(id);
        await this.isTaskExist(dto.code, project.id);
        try {
            const task = await this.repo.merge(old, dto);
            await this.repo.update(id, task);
            return this.mappingTaskRO(task);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
TaskService = TaskService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [task_respository_1.TaskRepository,
        organization_service_1.OrganizationService,
        project_service_1.ProjectService,
        auth_service_1.AuthService,
        action_repository_1.ActionRepository,
        resource_repository_1.ResourceRepository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map