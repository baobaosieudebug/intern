"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRepository = void 0;
const typeorm_1 = require("typeorm");
const resource_entity_1 = require("../entities/resource.entity");
let ResourceRepository = class ResourceRepository extends typeorm_1.Repository {
    async getIdByCode(code) {
        const resource = await this.findOne({ code });
        return resource.id;
    }
};
ResourceRepository = __decorate([
    typeorm_1.EntityRepository(resource_entity_1.ResourceEntity)
], ResourceRepository);
exports.ResourceRepository = ResourceRepository;
//# sourceMappingURL=resource.repository.js.map