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
exports.ProjectEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const organization_entity_1 = require("../organization/organization.entity");
const user_entity_1 = require("../user/entities/user.entity");
const task_entity_1 = require("../task/task.entity");
const category_entity_1 = require("../category/category.entity");
const type_entity_1 = require("../type/type.entity");
const status_entity_1 = require("../status/status.entity");
const version_entity_1 = require("../version/version.entity");
const user_project_entity_1 = require("../user/entities/user-project.entity");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column({ name: 'organization_id', nullable: true }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "organizationId", void 0);
__decorate([
    typeorm_1.Column({ name: 'create_by', nullable: true, default: null }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "createById", void 0);
__decorate([
    typeorm_1.Column({ name: 'admin_id', nullable: true, default: null }),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "adminId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity, (user) => user.project),
    typeorm_1.JoinColumn({ name: 'created_by' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectEntity.prototype, "createBy", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity, (user) => user.projectAdmin),
    typeorm_1.JoinColumn({ name: 'admin_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ProjectEntity.prototype, "admin", void 0);
__decorate([
    typeorm_1.OneToMany(() => category_entity_1.CategoryEntity, (category) => category.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "categories", void 0);
__decorate([
    typeorm_1.OneToMany(() => type_entity_1.TypeEntity, (type) => type.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "types", void 0);
__decorate([
    typeorm_1.OneToMany(() => status_entity_1.StatusEntity, (status) => status.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "statuses", void 0);
__decorate([
    typeorm_1.OneToMany(() => version_entity_1.VersionEntity, (version) => version.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "versions", void 0);
__decorate([
    typeorm_1.OneToMany(() => task_entity_1.TaskEntity, (task) => task.project),
    __metadata("design:type", Array)
], ProjectEntity.prototype, "tasks", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_project_entity_1.UserProjectEntity, (userProject) => userProject.project),
    __metadata("design:type", user_project_entity_1.UserProjectEntity)
], ProjectEntity.prototype, "userProject", void 0);
__decorate([
    typeorm_1.ManyToOne(() => organization_entity_1.OrganizationEntity, (organization) => organization.projects),
    typeorm_1.JoinColumn({ name: 'organization_id' }),
    __metadata("design:type", organization_entity_1.OrganizationEntity)
], ProjectEntity.prototype, "organization", void 0);
ProjectEntity = __decorate([
    typeorm_1.Entity('project')
], ProjectEntity);
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=project.entity.js.map