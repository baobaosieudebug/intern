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
exports.RoleEntity = void 0;
const typeorm_1 = require("typeorm");
const organization_entity_1 = require("../../organization/organization.entity");
const permission_entity_1 = require("./permission.entity");
const user_role_entity_1 = require("../../user/entities/user-role.entity");
let RoleEntity = class RoleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RoleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], RoleEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'organization_id', nullable: false }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "organizationId", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_by', nullable: true }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "updateBy", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime', name: 'created_at' }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'datetime', name: 'updated_at' }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => permission_entity_1.PermissionEntity, (permission) => permission.role),
    __metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
__decorate([
    typeorm_1.ManyToOne(() => organization_entity_1.OrganizationEntity, (organization) => organization.roles),
    typeorm_1.JoinColumn({ name: 'organization_id' }),
    __metadata("design:type", organization_entity_1.OrganizationEntity)
], RoleEntity.prototype, "organization", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_role_entity_1.UserRoleEntity, (userRole) => userRole.role),
    __metadata("design:type", user_role_entity_1.UserRoleEntity)
], RoleEntity.prototype, "userRole", void 0);
RoleEntity = __decorate([
    typeorm_1.Entity('role')
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map