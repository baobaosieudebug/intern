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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrganizationEntity = void 0;
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("../../organization/organization.entity");
const user_entity_1 = require("./user.entity");
let UserOrganizationEntity = class UserOrganizationEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserOrganizationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserOrganizationEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ name: 'organization_id' }),
    __metadata("design:type", Number)
], UserOrganizationEntity.prototype, "organizationId", void 0);
__decorate([
    typeorm_1.Column({
        name: 'active',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], UserOrganizationEntity.prototype, "active", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserOrganizationEntity.prototype, "attend", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserOrganizationEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => organization_entity_1.OrganizationEntity, (organization) => organization.userOrganization, { onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organization_id' }),
    __metadata("design:type", organization_entity_1.OrganizationEntity)
], UserOrganizationEntity.prototype, "organization", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.userOrganization, { onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserOrganizationEntity.prototype, "user", void 0);
UserOrganizationEntity = __decorate([
    typeorm_1.Entity('user_organization')
], UserOrganizationEntity);
exports.UserOrganizationEntity = UserOrganizationEntity;
//# sourceMappingURL=user-organization.entity.js.map