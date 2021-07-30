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
exports.ActionEntity = void 0;
const typeorm_1 = require("typeorm");
const resource_entity_1 = require("./resource.entity");
const permission_entity_1 = require("./permission.entity");
let ActionEntity = class ActionEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ActionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ActionEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ActionEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'resource_id', nullable: false }),
    __metadata("design:type", Number)
], ActionEntity.prototype, "resourceId", void 0);
__decorate([
    typeorm_1.OneToMany(() => permission_entity_1.PermissionEntity, (permission) => permission.action),
    __metadata("design:type", Array)
], ActionEntity.prototype, "permissions", void 0);
__decorate([
    typeorm_1.ManyToOne(() => resource_entity_1.ResourceEntity, (resource) => resource.actions),
    typeorm_1.JoinColumn({ name: 'resource_id' }),
    __metadata("design:type", resource_entity_1.ResourceEntity)
], ActionEntity.prototype, "resource", void 0);
ActionEntity = __decorate([
    typeorm_1.Entity('action')
], ActionEntity);
exports.ActionEntity = ActionEntity;
//# sourceMappingURL=action.entity.js.map