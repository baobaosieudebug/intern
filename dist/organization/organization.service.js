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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("../project/project.service");
const user_service_1 = require("../user/user.service");
const organization_repository_1 = require("./organization.repository");
const random_string_1 = require("../common/utils/random-string");
const organization_ro_1 = require("./ro/organization.ro");
const project_repository_1 = require("../project/project.repository");
let OrganizationService = class OrganizationService {
    constructor(repo, projectService, projectRepo, userService) {
        this.repo = repo;
        this.projectService = projectService;
        this.projectRepo = projectRepo;
        this.userService = userService;
        this.logger = new common_1.Logger(project_service_1.ProjectService.name);
    }
    mappingOrganizationRO(organization) {
        const response = new organization_ro_1.OrganizationRO();
        response.name = organization.name;
        response.logo = organization.logo;
        response.description = organization.description;
        response.address = organization.address;
        response.city = organization.city;
        response.country = organization.country;
        response.plan = organization.plan;
        return response;
    }
    getOneByCode(code) {
        return this.repo.getByCode(code);
    }
    async getOneOrFail(payload, code) {
        await this.isOwner(payload);
        return await this.getOneByCode(code);
    }
    async getListUser(payload, domain) {
        await this.isOwnerDomain(payload, domain);
        try {
            return await this.userService.getListUserByDomain(payload);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async isOwner(payload) {
        if (!payload.organizationCode) {
            throw new common_1.NotFoundException('Not found organization');
        }
        const org = await this.repo.isOwnerOrg(payload.organizationCode.code, payload.id);
        if (!org) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async isOwnerDomain(payload, domain) {
        const isOwnerDomain = await this.repo.isOwnerDomain(domain, payload.id);
        if (!isOwnerDomain) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async createCode() {
        let code = '';
        let found = true;
        while (found) {
            code = random_string_1.RandomString(10);
            const existCode = await this.repo.isOrgCodeExist(code);
            if (!existCode) {
                found = false;
            }
        }
        return code;
    }
    async create(payload, dto) {
        const randomCode = await this.createCode();
        const org = await this.repo.isExistOwner(payload.id);
        if (org) {
            throw new common_1.BadRequestException('User created Organization');
        }
        try {
            const newOrg = this.repo.create(dto);
            newOrg.ownerId = payload.id;
            newOrg.code = randomCode;
            await this.repo.save(newOrg);
            return this.mappingOrganizationRO(newOrg);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    invite(payload, domain) {
        if (!payload.organizationCode) {
            throw new common_1.BadRequestException('Organization not null');
        }
        if (payload.organizationCode.domain !== domain) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            return this.userService.invite(payload);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async edit(payload, dto) {
        await this.isOwner(payload);
        const old = await this.getOneByCode(payload.organizationCode.code);
        try {
            const organization = await this.repo.merge(old, dto);
            await this.repo.update(old.id, organization);
            return this.mappingOrganizationRO(organization);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async delete(payload, code) {
        await this.isOwner(payload);
        const organization = await this.getOneByCode(code);
        try {
            organization.isDeleted = organization.id;
            await this.repo.update(organization.id, organization);
            return organization.id;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListProject(payload, code) {
        const organization = await this.getOneOrFail(payload, code);
        try {
            return await this.projectService.getListProject(organization.id);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
OrganizationService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => project_service_1.ProjectService))),
    __metadata("design:paramtypes", [organization_repository_1.OrganizationRepository,
        project_service_1.ProjectService,
        project_repository_1.ProjectRepository,
        user_service_1.UserService])
], OrganizationService);
exports.OrganizationService = OrganizationService;
//# sourceMappingURL=organization.service.js.map