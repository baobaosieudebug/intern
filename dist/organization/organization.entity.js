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
exports.OrganizationEntity = void 0;
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../project/project.entity");
const user_entity_1 = require("../user/entities/user.entity");
const user_organization_entity_1 = require("../user/entities/user-organization.entity");
const role_entity_1 = require("../auth/entities/role.entity");
let OrganizationEntity = class OrganizationEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrganizationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "domain", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "plan", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], OrganizationEntity.prototype, "country", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrganizationEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrganizationEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'owner_id', nullable: true }),
    __metadata("design:type", Number)
], OrganizationEntity.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], OrganizationEntity.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity, (user) => user.organization),
    typeorm_1.JoinColumn({ name: 'owner_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], OrganizationEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => project_entity_1.ProjectEntity, (project) => project.organization),
    __metadata("design:type", Array)
], OrganizationEntity.prototype, "projects", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_organization_entity_1.UserOrganizationEntity, (userOrganization) => userOrganization.organization),
    __metadata("design:type", user_organization_entity_1.UserOrganizationEntity)
], OrganizationEntity.prototype, "userOrganization", void 0);
__decorate([
    typeorm_1.OneToMany(() => role_entity_1.RoleEntity, (role) => role.organization),
    __metadata("design:type", Array)
], OrganizationEntity.prototype, "roles", void 0);
OrganizationEntity = __decorate([
    typeorm_1.Entity('organization')
], OrganizationEntity);
exports.OrganizationEntity = OrganizationEntity;
//# sourceMappingURL=organization.entity.js.map