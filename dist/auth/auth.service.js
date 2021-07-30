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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
const user_repository_1 = require("../user/repository/user.repository");
const random_string_1 = require("../common/utils/random-string");
const user_ro_1 = require("../user/ro/user.ro");
const organization_service_1 = require("../organization/organization.service");
const permission_repository_1 = require("./repository/permission.repository");
const action_repository_1 = require("./repository/action.repository");
const resource_repository_1 = require("./repository/resource.repository");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, httpService, userService, userRepo, orgService, permissionRepo, actionRepo, resourceRepo) {
        this.jwtService = jwtService;
        this.httpService = httpService;
        this.userService = userService;
        this.userRepo = userRepo;
        this.orgService = orgService;
        this.permissionRepo = permissionRepo;
        this.actionRepo = actionRepo;
        this.resourceRepo = resourceRepo;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async isExistUser(email, username) {
        const isExistEmail = await this.userRepo.isExistEmail(email);
        const isExistUsername = await this.userRepo.isExistUsername(username);
        if (isExistEmail) {
            throw new common_1.BadRequestException('email must be unique');
        }
        if (isExistUsername) {
            throw new common_1.BadRequestException('username must be unique');
        }
    }
    async createCode() {
        let code = '';
        let found = true;
        while (found) {
            code = random_string_1.RandomString(10);
            const existCode = await this.userRepo.isExistCode(code);
            if (!existCode) {
                found = false;
            }
        }
        return code;
    }
    mappingUserRO(user) {
        const response = new user_ro_1.UserRO();
        response.username = user.username;
        response.avatar = user.avatar;
        response.status = user.status;
        return response;
    }
    async register(user) {
        await this.isExistUser(user.email, user.username);
        try {
            user.password = await bcrypt.hash(user.password, 12);
            const newUser = this.userRepo.create(user);
            newUser.code = await this.createCode();
            await this.userRepo.save(newUser);
            return this.mappingUserRO(newUser);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async login(data) {
        const user = await this.userService.getOneByEmailOrFail(data.email);
        if (!(await bcrypt.compare(data.password, user.password))) {
            throw new common_1.NotFoundException('User wrong password');
        }
        const token = await this.getUserToken(user);
        return {
            id: user.id,
            username: user.username,
            organizationCode: user.organization,
            email: user.email,
            token,
        };
    }
    async getUserToken(user) {
        const role = await this.userService.getRoleById(user.id);
        const payload = {
            id: user.id,
            username: user.username,
            organizationCode: user.organization,
            email: user.email,
            role: role.roleId,
        };
        const token = jwt.sign(payload, 'SECRET', { expiresIn: 60000 });
        return token;
    }
    async addPermission(payload, data) {
        const lengthPer = data.permission.length;
        for (let i = 0; i < lengthPer; i++) {
            const lengthAction = data.permission[i].actions.length;
            for (let j = 0; j < lengthAction; j++) {
                const code = data.permission[i].actions[j].code;
                const codeResource = data.permission[i].code;
                const resourceId = await this.resourceRepo.getIdByCode(codeResource);
                const actionId = await this.actionRepo.getIdByCode(code, resourceId);
                const isExistPer = await this.permissionRepo.isExistPer(resourceId, data.role_id, actionId);
                if (isExistPer)
                    break;
                const permission = this.permissionRepo.create();
                permission.roleId = data.role_id;
                permission.resourceId = resourceId;
                permission.actionId = actionId;
                permission.allowed = 1;
                permission.createdBy = payload.id;
                await this.permissionRepo.save(permission);
            }
        }
        return data;
    }
    async addRole(payload, data) {
        await this.orgService.isOwner(payload);
        try {
            return await this.addPermission(payload, data);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async isExistPermission(actionId, resourceId, roleId) {
        try {
            return await this.permissionRepo.isExistPer(actionId, resourceId, roleId);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
AuthService = AuthService_1 = __decorate([
    common_1.Injectable(),
    __param(4, common_1.Inject(common_1.forwardRef(() => organization_service_1.OrganizationService))),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        common_1.HttpService,
        user_service_1.UserService,
        user_repository_1.UserRepository,
        organization_service_1.OrganizationService,
        permission_repository_1.PermissionRepository,
        action_repository_1.ActionRepository,
        resource_repository_1.ResourceRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map