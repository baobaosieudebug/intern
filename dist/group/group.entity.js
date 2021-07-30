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
exports.GroupsEntity = void 0;
const typeorm_1 = require("typeorm");
let GroupsEntity = class GroupsEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GroupsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'name_group', type: 'varchar' }),
    __metadata("design:type", String)
], GroupsEntity.prototype, "nameGroup", void 0);
__decorate([
    typeorm_1.Column({ name: 'is_deleted', type: 'varchar', default: 0 }),
    __metadata("design:type", Number)
], GroupsEntity.prototype, "isDeleted", void 0);
GroupsEntity = __decorate([
    typeorm_1.Entity('group')
], GroupsEntity);
exports.GroupsEntity = GroupsEntity;
//# sourceMappingURL=group.entity.js.map