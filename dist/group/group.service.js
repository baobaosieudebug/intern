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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GroupsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const group_repository_1 = require("./group.repository");
const user_service_1 = require("../user/user.service");
const get_group_ro_1 = require("./ro/get-group.ro");
const handle_group_ro_1 = require("./ro/handle-group.ro");
let GroupsService = GroupsService_1 = class GroupsService {
    constructor(repo, userService) {
        this.repo = repo;
        this.userService = userService;
        this.logger = new common_1.Logger(GroupsService_1.name);
    }
    async getOneById(id) {
        return await this.repo.getOneById(id);
    }
    async getOneOrFail(id) {
        const group = await this.getOneById(id);
        if (!group) {
            throw new common_1.NotFoundException('Group not found');
        }
        return group;
    }
    async getAll() {
        const oldArray = await this.repo.getAll();
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const groupRO = await this.getGroupResponse(oldArray[i]);
            newArray.push(groupRO);
        }
        return newArray;
    }
    async getGroupResponse(group) {
        const response = new get_group_ro_1.GetGroupRO();
        response.nameGroup = group.nameGroup;
        return response;
    }
    async handleGroupResponse(group) {
        const response = new handle_group_ro_1.HandleGroupRO();
        response.nameGroup = group.nameGroup;
        return response;
    }
    async createGroup(dto) {
        try {
            const group = this.repo.create(dto);
            await this.repo.save(group);
            return this.handleGroupResponse(group);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async edit(id, dto) {
        const old = await this.getOneOrFail(id);
        try {
            const group = await this.repo.merge(old, dto);
            await this.repo.update(id, group);
            return this.handleGroupResponse(group);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async delete(id) {
        const group = await this.getOneOrFail(id);
        try {
            group.isDeleted = group.id;
            await this.repo.update(id, group);
            return this.handleGroupResponse(group);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
GroupsService = GroupsService_1 = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [group_repository_1.GroupRepository,
        user_service_1.UserService])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=group.service.js.map