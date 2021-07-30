"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("typeorm");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    getOneByUsername(username) {
        return this.findOne({ username, isDeleted: 0 });
    }
    getOneById(id) {
        return this.findOne({ id, isDeleted: 0 });
    }
    getOneByEmail(email) {
        return this.findOne({ email, isDeleted: 0 }, { relations: ['organization'] });
    }
    async isExistEmail(email) {
        const checkExist = await this.count({
            where: { email, isDeleted: 0 },
        });
        return checkExist > 0;
    }
    async isExistUsername(username) {
        const checkExist = await this.count({
            where: { username, isDeleted: 0 },
        });
        return checkExist > 0;
    }
    async isExistCode(code) {
        const checkExist = await this.count({
            where: { code, isDeleted: 0 },
        });
        return checkExist > 0;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map