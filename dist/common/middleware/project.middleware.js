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
exports.ProjectMiddleware = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("../../project/project.service");
let ProjectMiddleware = class ProjectMiddleware {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async use(req, res, next) {
        const projectId = Number(req.params.projectId);
        if (!projectId) {
            throw new common_1.BadRequestException('Id Project Incorrect');
        }
        await this.projectService.checkProjectExist(projectId);
        next();
    }
};
ProjectMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectMiddleware);
exports.ProjectMiddleware = ProjectMiddleware;
//# sourceMappingURL=project.middleware.js.map