"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const project_entity_1 = require("./project.entity");
const typeorm_1 = require("typeorm");
let ProjectRepository = class ProjectRepository extends typeorm_1.Repository {
    getById(id) {
        return this.findOne({ id, isDeleted: 0 });
    }
    getAll(organizationId) {
        return this.find({ organizationId, isDeleted: 0 });
    }
    getByCode(code) {
        return this.findOne({ code, isDeleted: 0 });
    }
    async checkProjectExist(id) {
        const project = await this.count({ where: { id } });
        return project > 0;
    }
    async isProjectExist(organizationId, code) {
        const project = await this.count({
            where: { code, organizationId },
        });
        return project > 0;
    }
    async isOwner(code, createById) {
        const project = await this.count({ where: { code, createById } });
        return project > 0;
    }
    async isExistCode(id, code) {
        const project = await this.count({ where: { id: typeorm_1.Not(id), code } });
        return project > 0;
    }
    async getListProject(organizationId) {
        return await this.find({ where: { organizationId } });
    }
};
ProjectRepository = __decorate([
    typeorm_1.EntityRepository(project_entity_1.ProjectEntity)
], ProjectRepository);
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=project.repository.js.map