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
exports.ResourceEntity = void 0;
const typeorm_1 = require("typeorm");
const action_entity_1 = require("./action.entity");
const permission_entity_1 = require("./permission.entity");
let ResourceEntity = class ResourceEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ResourceEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ResourceEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ResourceEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.OneToMany(() => action_entity_1.ActionEntity, (action) => action.resource),
    __metadata("design:type", Array)
], ResourceEntity.prototype, "actions", void 0);
__decorate([
    typeorm_1.OneToMany(() => permission_entity_1.PermissionEntity, (permission) => permission.resource),
    __metadata("design:type", Array)
], ResourceEntity.prototype, "permissions", void 0);
ResourceEntity = __decorate([
    typeorm_1.Entity('resource')
], ResourceEntity);
exports.ResourceEntity = ResourceEntity;
//# sourceMappingURL=resource.entity.js.map