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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../../project/project.entity");
const task_entity_1 = require("../../task/task.entity");
const organization_entity_1 = require("../../organization/organization.entity");
const user_organization_entity_1 = require("./user-organization.entity");
const user_project_entity_1 = require("./user-project.entity");
const user_role_entity_1 = require("./user-role.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false, select: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToOne(() => organization_entity_1.OrganizationEntity, (organization) => organization.user),
    __metadata("design:type", organization_entity_1.OrganizationEntity)
], UserEntity.prototype, "organization", void 0);
__decorate([
    typeorm_1.OneToOne(() => project_entity_1.ProjectEntity, (project) => project.createBy),
    __metadata("design:type", project_entity_1.ProjectEntity)
], UserEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.OneToOne(() => project_entity_1.ProjectEntity, (project) => project.admin),
    __metadata("design:type", project_entity_1.ProjectEntity)
], UserEntity.prototype, "projectAdmin", void 0);
__decorate([
    typeorm_1.OneToMany(() => task_entity_1.TaskEntity, (task) => task.userAssign),
    __metadata("design:type", Array)
], UserEntity.prototype, "tasksAssign", void 0);
__decorate([
    typeorm_1.OneToMany(() => task_entity_1.TaskEntity, (task) => task.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_organization_entity_1.UserOrganizationEntity, (userOrganization) => userOrganization.user),
    __metadata("design:type", user_organization_entity_1.UserOrganizationEntity)
], UserEntity.prototype, "userOrganization", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_project_entity_1.UserProjectEntity, (userProject) => userProject.user),
    __metadata("design:type", user_project_entity_1.UserProjectEntity)
], UserEntity.prototype, "userProject", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_role_entity_1.UserRoleEntity, (userRole) => userRole.user),
    __metadata("design:type", user_role_entity_1.UserRoleEntity)
], UserEntity.prototype, "userRole", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map