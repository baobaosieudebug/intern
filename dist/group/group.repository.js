"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRepository = void 0;
const group_entity_1 = require("./group.entity");
const typeorm_1 = require("typeorm");
let GroupRepository = class GroupRepository extends typeorm_1.Repository {
    getOneById(id) {
        return this.findOne({ id, isDeleted: 0 });
    }
    getAll() {
        return this.find({ isDeleted: 0 });
    }
    async isUserExistInGroup(idUser) {
        const response = await this.createQueryBuilder('group')
            .leftJoinAndSelect('group.users', 'user')
            .where('user.id = :idUser', { idUser })
            .getCount();
        return response > 0;
    }
};
GroupRepository = __decorate([
    typeorm_1.EntityRepository(group_entity_1.GroupsEntity)
], GroupRepository);
exports.GroupRepository = GroupRepository;
//# sourceMappingURL=group.repository.js.map