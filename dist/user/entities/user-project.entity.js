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
exports.UserProjectEntity = void 0;
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../../project/project.entity");
const user_entity_1 = require("./user.entity");
let UserProjectEntity = class UserProjectEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserProjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserProjectEntity.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column({ name: 'project_id' }),
    __metadata("design:type", Number)
], UserProjectEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserProjectEntity.prototype, "attend", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ nullable: true }),
    __metadata("design:type", Date)
], UserProjectEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => project_entity_1.ProjectEntity, (project) => project.userProject, { onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'project_id' }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], UserProjectEntity.prototype, "project", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.userProject, { onUpdate: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserProjectEntity.prototype, "user", void 0);
UserProjectEntity = __decorate([
    typeorm_1.Entity('user_project')
], UserProjectEntity);
exports.UserProjectEntity = UserProjectEntity;
//# sourceMappingURL=user-project.entity.js.map