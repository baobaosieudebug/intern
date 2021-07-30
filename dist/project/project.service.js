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
var ProjectService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const organization_service_1 = require("../organization/organization.service");
const user_service_1 = require("../user/user.service");
const user_project_repository_1 = require("../user/repository/user-project.repository");
const organization_repository_1 = require("../organization/organization.repository");
const project_repository_1 = require("./project.repository");
const project_ro_1 = require("./ro/project.ro");
const role_repository_1 = require("../auth/repository/role.repository");
const auth_service_1 = require("../auth/auth.service");
const action_repository_1 = require("../auth/repository/action.repository");
const resource_repository_1 = require("../auth/repository/resource.repository");
let ProjectService = ProjectService_1 = class ProjectService {
    constructor(repo, orgService, orgRepo, userProjectRepo, userService, roleRepo, authService, actionRepo, resourceRepo) {
        this.repo = repo;
        this.orgService = orgService;
        this.orgRepo = orgRepo;
        this.userProjectRepo = userProjectRepo;
        this.userService = userService;
        this.roleRepo = roleRepo;
        this.authService = authService;
        this.actionRepo = actionRepo;
        this.resourceRepo = resourceRepo;
        this.logger = new common_1.Logger(ProjectService_1.name);
    }
    async getOneByCode(code) {
        return await this.repo.getByCode(code);
    }
    async getOneById(id) {
        return await this.repo.getById(id);
    }
    async getOneByCodeOrFail(code) {
        const project = await this.getOneByCode(code);
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        return project;
    }
    async isExistPermission(actionId, resourceId, roleId) {
        const isExistPermission = await this.authService.isExistPermission(actionId, resourceId, roleId);
        if (!isExistPermission) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async mappingProjectRO(project) {
        const response = new project_ro_1.ProjectRO();
        response.id = project.id;
        response.code = project.code;
        response.name = project.name;
        response.description = project.description;
        return response;
    }
    async mappingListProjectRO(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const projectRO = await this.mappingProjectRO(oldArray[i]);
            newArray.push(projectRO);
        }
        return newArray;
    }
    async mappingListProjectEntity(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const project = await this.getOneById(oldArray[i].projectId);
            newArray.push(project);
        }
        return newArray;
    }
    async checkProjectExist(id) {
        const project = await this.repo.checkProjectExist(id);
        if (!project) {
            throw new common_1.NotFoundException('Project not found');
        }
        return project;
    }
    async isProjectExist(payload, projectCode) {
        const isProjectExist = await this.repo.isProjectExist(payload.organizationCode.id, projectCode);
        if (!isProjectExist) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async create(payload, dto) {
        await this.orgService.isOwner(payload);
        const isProjectExist = await this.repo.isProjectExist(payload.organizationCode.id, dto.code);
        if (isProjectExist) {
            throw new common_1.BadRequestException('Project Exist in Organization');
        }
        try {
            const project = this.repo.create(dto);
            project.createById = payload.id;
            project.adminId = payload.id;
            project.organizationId = payload.organizationCode.id;
            await this.repo.save(project);
            return this.mappingProjectRO(project);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async addUser(payload, projectCode, id) {
        const project = await this.getOneByCodeOrFail(projectCode);
        const isUserExist = await this.userProjectRepo.isUserExist(project.id, id);
        if (isUserExist) {
            throw new common_1.BadRequestException('User Exist Project');
        }
        if (payload.roles !== 'admin' && !payload.organizationCode) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            return await this.userService.addUser(project.id, id);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getInfo(payload, code) {
        const project = await this.getOneByCodeOrFail(code);
        const isUserExistInProject = await this.userProjectRepo.isUserExist(project.id, payload.id);
        if (!payload.organizationCode && !isUserExistInProject) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const resourceId = await this.resourceRepo.getIdByCode('project');
        const actionId = await this.actionRepo.getIdByCode('view', resourceId);
        await this.isExistPermission(actionId, resourceId, payload.role);
        try {
            return this.mappingProjectRO(project);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListUser(payload, code) {
        const project = await this.getOneByCodeOrFail(code);
        if (payload.roles === 'user' && project.createById !== payload.id) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            return this.userService.getListUser(project.id);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListUserByUser(payload, projectCode) {
        const project = await this.getOneByCodeOrFail(projectCode);
        const isUserExist = await this.userProjectRepo.isUserExist(project.id, payload.id);
        if (payload.roles === 'admin' || (!isUserExist && payload.id !== project.createById)) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            return this.userService.getListUser(project.id);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getList(payload) {
        if (!payload.organizationCode || payload.id !== payload.organizationCode.ownerId) {
            const userProjectArray = await this.userProjectRepo.getListProject(payload.id);
            const projectArray = await this.mappingListProjectEntity(userProjectArray);
            return this.mappingListProjectRO(projectArray);
        }
        try {
            const oldArray = await this.repo.getAll(payload.organizationCode.id);
            return this.mappingListProjectRO(oldArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async edit(payload, code, dto) {
        const old = await this.getOneByCodeOrFail(code);
        const isOwner = await this.repo.isOwner(code, payload.id);
        if (!isOwner) {
            const resourceId = await this.resourceRepo.getIdByCode('project');
            const actionId = await this.actionRepo.getIdByCode('edit', resourceId);
            await this.isExistPermission(actionId, resourceId, payload.role);
        }
        const isExistCode = await this.repo.isExistCode(old.id, dto.code);
        if (isExistCode) {
            throw new common_1.BadRequestException('Code must be unique');
        }
        try {
            const project = await this.repo.merge(old, dto);
            await this.repo.update(old.id, project);
            return this.mappingProjectRO(project);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async delete(payload, code) {
        const project = await this.getOneByCode(code);
        const isOwner = await this.repo.isOwner(code, payload.id);
        if (!isOwner) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            project.isDeleted = project.id;
            await this.repo.update(project.id, project);
            return project.id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListProject(id) {
        try {
            const oldArray = await this.repo.getListProject(id);
            return this.mappingListProjectRO(oldArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListAdmin(payload, code) {
        await this.getOneByCodeOrFail(code);
        const isOwner = await this.repo.isOwner(code, payload.id);
        if (!isOwner) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const roleCode = 'admin';
        try {
            const roleId = await this.roleRepo.getIdOfRoleByCode(roleCode);
            return this.userService.getListAdmin(roleId);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
ProjectService = ProjectService_1 = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => organization_service_1.OrganizationService))),
    __metadata("design:paramtypes", [project_repository_1.ProjectRepository,
        organization_service_1.OrganizationService,
        organization_repository_1.OrganizationRepository,
        user_project_repository_1.UserProjectRepository,
        user_service_1.UserService,
        role_repository_1.RoleRepository,
        auth_service_1.AuthService,
        action_repository_1.ActionRepository,
        resource_repository_1.ResourceRepository])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map