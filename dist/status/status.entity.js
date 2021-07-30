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
exports.StatusEntity = void 0;
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../project/project.entity");
let StatusEntity = class StatusEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StatusEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], StatusEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], StatusEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], StatusEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], StatusEntity.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at' }),
    __metadata("design:type", Date)
], StatusEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StatusEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'project_id', nullable: true }),
    __metadata("design:type", Number)
], StatusEntity.prototype, "projectId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => project_entity_1.ProjectEntity, (project) => project.statuses),
    typeorm_1.JoinColumn({ name: 'project_id' }),
    __metadata("design:type", project_entity_1.ProjectEntity)
], StatusEntity.prototype, "project", void 0);
StatusEntity = __decorate([
    typeorm_1.Entity('status')
], StatusEntity);
exports.StatusEntity = StatusEntity;
//# sourceMappingURL=status.entity.js.map