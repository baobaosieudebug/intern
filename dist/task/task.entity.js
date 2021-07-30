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
exports.TaskEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/entities/user.entity");
const project_entity_1 = require("../project/project.entity");
let TaskEntity = class TaskEntity {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], TaskEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], TaskEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'date_begin', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "dateBegin", void 0);
__decorate([
    typeorm_1.Column({ name: 'date_end', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "dateEnd", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at', type: 'date', nullable: false }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'create_user_id', nullable: true }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "createUserId", void 0);
__decorate([
    typeorm_1.Column({ name: 'assign_user_id', nullable: true }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "assignUserId", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column({ name: 'project_id', nullable: true }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.tasksAssign),
    typeorm_1.JoinColumn({ name: 'assign_user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskEntity.prototype, "userAssign", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.tasks),
    typeorm_1.JoinColumn({ name: 'create_user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], TaskEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => project_entity_1.ProjectEntity, (project) => project.tasks),
    typeorm_1.JoinColumn({ name: 'project_id' }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], TaskEntity.prototype, "project", void 0);
TaskEntity = __decorate([
    typeorm_1.Entity('task')
], TaskEntity);
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.entity.js.map