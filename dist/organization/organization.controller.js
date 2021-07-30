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
exports.OrganizationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payload_decorator_1 = require("../decorators/payload.decorator");
const organization_service_1 = require("./organization.service");
const add_organization_dto_1 = require("./dto/add-organization.dto");
const edit_organization_dto_1 = require("./dto/edit-organization.dto");
let OrganizationController = class OrganizationController {
    constructor(organizationService) {
        this.organizationService = organizationService;
    }
    async getOne(payload, code) {
        const org = await this.organizationService.getOneOrFail(payload, code);
        return this.organizationService.mappingOrganizationRO(org);
    }
    async getListUser(payload, domain) {
        return await this.organizationService.getListUser(payload, domain);
    }
    async create(payload, dto) {
        return await this.organizationService.create(payload, dto);
    }
    async inviteOrg(payload, domain) {
        return await this.organizationService.invite(payload, domain);
    }
    async edit(payload, dto) {
        return await this.organizationService.edit(payload, dto);
    }
    async delete(payload, code) {
        return await this.organizationService.delete(payload, code);
    }
    async getListProject(payload, code) {
        return await this.organizationService.getListProject(payload, code);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getOne", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':domain/users'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('domain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getListUser", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, add_organization_dto_1.AddOrganizationDTO]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Post(':domain/invite'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('domain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "inviteOrg", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.UsePipes(common_1.ValidationPipe),
    common_1.Put(),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, edit_organization_dto_1.EditOrganizationDTO]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':code'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "delete", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(':code/projects'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getListProject", null);
OrganizationController = __decorate([
    swagger_1.ApiTags('Organization'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    common_1.Controller('organization'),
    __metadata("design:paramtypes", [organization_service_1.OrganizationService])
], OrganizationController);
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=organization.controller.js.map