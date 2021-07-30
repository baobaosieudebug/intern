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
exports.PermissionEntity = void 0;
const typeorm_1 = require("typeorm");
const resource_entity_1 = require("./resource.entity");
const role_entity_1 = require("./role.entity");
const action_entity_1 = require("./action.entity");
let PermissionEntity = class PermissionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'resource_id', nullable: false }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "resourceId", void 0);
__decorate([
    typeorm_1.Column({ name: 'role_id', nullable: false }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "roleId", void 0);
__decorate([
    typeorm_1.Column({ name: 'action_id', nullable: false }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "actionId", void 0);
__decorate([
    typeorm_1.Column({ name: 'allowed', nullable: false }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "allowed", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_by', nullable: false }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_by', nullable: true }),
    __metadata("design:type", Number)
], PermissionEntity.prototype, "updateBy", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'datetime', name: 'created_at' }),
    __metadata("design:type", Date)
], PermissionEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'datetime', name: 'updated_at' }),
    __metadata("design:type", Date)
], PermissionEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => resource_entity_1.ResourceEntity, (resource) => resource.permissions),
    typeorm_1.JoinColumn({ name: 'resource_id' }),
    __metadata("design:type", resource_entity_1.ResourceEntity)
], PermissionEntity.prototype, "resource", void 0);
__decorate([
    typeorm_1.ManyToOne(() => role_entity_1.RoleEntity, (role) => role.permissions),
    typeorm_1.JoinColumn({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.RoleEntity)
], PermissionEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.ManyToOne(() => action_entity_1.ActionEntity, (action) => action.permissions),
    typeorm_1.JoinColumn({ name: 'action_id' }),
    __metadata("design:type", action_entity_1.ActionEntity)
], PermissionEntity.prototype, "action", void 0);
PermissionEntity = __decorate([
    typeorm_1.Entity('permission')
], PermissionEntity);
exports.PermissionEntity = PermissionEntity;
//# sourceMappingURL=permission.entity.js.map