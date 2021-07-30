"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrganizationRepository = void 0;
const typeorm_1 = require("typeorm");
const user_organization_entity_1 = require("../entities/user-organization.entity");
let UserOrganizationRepository = class UserOrganizationRepository extends typeorm_1.Repository {
    async isExistUser(userId, organizationId) {
        const checkExist = await this.count({
            where: { userId, organizationId },
        });
        return checkExist > 0;
    }
    async getListUser(organizationId) {
        return await this.find({ organizationId });
    }
};
UserOrganizationRepository = __decorate([
    typeorm_1.EntityRepository(user_organization_entity_1.UserOrganizationEntity)
], UserOrganizationRepository);
exports.UserOrganizationRepository = UserOrganizationRepository;
//# sourceMappingURL=user-organization.repository.js.map