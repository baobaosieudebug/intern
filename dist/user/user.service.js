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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const mail_service_1 = require("../mail/mail.service");
const user_organization_repository_1 = require("./repository/user-organization.repository");
const user_project_repository_1 = require("./repository/user-project.repository");
const user_repository_1 = require("./repository/user.repository");
const self_user_ro_1 = require("./ro/self-user.ro");
const user_ro_1 = require("./ro/user.ro");
const bcrypt = require("bcrypt");
const user_role_repository_1 = require("./repository/user-role.repository");
let UserService = UserService_1 = class UserService {
    constructor(repo, mailService, userOrgRepo, userProjectRepo, userRoleRepo) {
        this.repo = repo;
        this.mailService = mailService;
        this.userOrgRepo = userOrgRepo;
        this.userProjectRepo = userProjectRepo;
        this.userRoleRepo = userRoleRepo;
        this.algorithm = 'aes-256-cbc';
        this.pepper = 'superSecretPepper';
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async isOwner(payload, username) {
        return payload.username === username;
    }
    async mappingSelfUserRO(user) {
        const response = new self_user_ro_1.SelfUserRO();
        response.username = user.username;
        response.email = user.email;
        response.status = user.status;
        response.avatar = user.avatar;
        response.phone = user.phone;
        return response;
    }
    mappingUserRO(user) {
        const response = new user_ro_1.UserRO();
        response.username = user.username;
        response.avatar = user.avatar;
        response.status = user.status;
        return response;
    }
    async mappingUserOrgToRO(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const user = await this.getOneById(oldArray[i].userId);
            const userRO = await this.mappingUserRO(user);
            newArray.push(userRO);
        }
        return newArray;
    }
    async mappingUserProjectToRO(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const user = await this.getOneById(oldArray[i].userId);
            const userRO = await this.mappingUserRO(user);
            newArray.push(userRO);
        }
        return newArray;
    }
    async mappingUserRoleToRO(oldArray) {
        const newArray = [];
        for (let i = 0; i < oldArray.length; i++) {
            const user = await this.getOneById(oldArray[i].userId);
            const userRO = await this.mappingUserRO(user);
            newArray.push(userRO);
        }
        return newArray;
    }
    async getOneByUsername(username) {
        return await this.repo.getOneByUsername(username);
    }
    async getOneByEmail(email) {
        return await this.repo.getOneByEmail(email);
    }
    async getOneByEmailOrFail(email) {
        const user = await this.getOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async getOneById(id) {
        return await this.repo.getOneById(id);
    }
    async getOneByIdOrFail(id) {
        const user = await this.getOneById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async getListUser(projectId) {
        try {
            const userProjectArray = await this.userProjectRepo.getListUser(projectId);
            return this.mappingUserProjectToRO(userProjectArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListAdmin(roleId) {
        try {
            const adminArray = await this.userRoleRepo.getListAdmin(roleId);
            return this.mappingUserRoleToRO(adminArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getListUserByDomain(payload) {
        try {
            const userOrgArray = await this.userOrgRepo.getListUser(payload.organizationCode.id);
            return this.mappingUserOrgToRO(userOrgArray);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async isSameProject(id, userProjectArray) {
        let check = false;
        for (let i = 0; i < userProjectArray.length; i++) {
            const projectId = userProjectArray[i].projectId;
            console.log(projectId);
            const isProjectByIdReq = await this.userProjectRepo.isUserExist(projectId, id);
            if (isProjectByIdReq) {
                check = true;
            }
        }
        if (!check) {
            throw new common_1.ForbiddenException('Forbidden');
        }
    }
    async getOneWithOwner(payload, username) {
        const isOwner = await this.isOwner(payload, username);
        const user = await this.getOneByUsername(username);
        if (isOwner) {
            return this.mappingSelfUserRO(user);
        }
        const userProjectArray = await this.userProjectRepo.getListProject(user.id);
        await this.isSameProject(payload.id, userProjectArray);
        return this.mappingUserRO(user);
    }
    encryptCipheriv(data) {
        const iv = crypto_1.randomBytes(16);
        const key = crypto_1.createHash('sha256').update(this.pepper).digest('base64');
        const cipher = crypto_1.createCipheriv(this.algorithm, key.substring(0, 32), iv);
        let token = cipher.update(JSON.stringify(data));
        token = Buffer.concat([token, cipher.final()]);
        return `${iv.toString('hex')}$:${token.toString('hex')}`;
    }
    decryptCipheriv(hash) {
        const parts = hash.split(':');
        const iv = Buffer.from(parts.shift(), 'hex');
        const tokenBody = Buffer.from(parts.join(':'), 'hex');
        const key = crypto_1.createHash('sha256').update(this.pepper).digest('base64');
        const decipher = crypto_1.createDecipheriv(this.algorithm, key.substring(0, 32), iv);
        let decrypted = decipher.update(tokenBody);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return JSON.parse(decrypted.toString());
    }
    async invite(payload) {
        const emailReceive = process.env.MAIl_USER;
        payload.emailReceive = emailReceive;
        const userReceive = await this.getOneByEmailOrFail(emailReceive);
        const isExitUser = await this.userOrgRepo.isExistUser(userReceive.id, payload.organizationCode.id);
        if (isExitUser) {
            throw new common_1.BadRequestException('User exist Organization');
        }
        const token = this.encryptCipheriv(payload);
        const data = {
            to: emailReceive,
            from: payload.email,
            subject: 'Invite Organization! Confirm your Email',
            template: './layout/invite-org.hbs',
            context: {
                name: payload.username,
                emailReceive: emailReceive,
                url: process.env.LOCAL_HOST,
                token: token,
            },
        };
        try {
            const sendMailInfo = await this.mailService.sendMail(data);
            return sendMailInfo.accepted.join();
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException();
        }
    }
    async addUser(projectId, id) {
        const user = await this.getOneByIdOrFail(id);
        try {
            const userProject = this.userProjectRepo.create();
            userProject.projectId = projectId;
            userProject.userId = id;
            await this.userProjectRepo.save(userProject);
            return this.mappingUserRO(user);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async joinOrg(token) {
        try {
            const decryptToken = await this.decryptCipheriv(token);
            const user = await this.repo.getOneByEmail(decryptToken.userReceive);
            const userOrg = await this.userOrgRepo.create();
            userOrg.organizationId = decryptToken.organizationCode.id;
            userOrg.userId = user.id;
            userOrg.active = true;
            await this.userOrgRepo.save(userOrg);
            return userOrg;
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async edit(payload, id, dto) {
        const old = await this.getOneByIdOrFail(id);
        if (payload.id !== id) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        try {
            dto.password = await bcrypt.hash(dto.password, 12);
            const user = await this.repo.merge(old, dto);
            await this.repo.update(id, user);
            return this.mappingUserRO(user);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
    async getRoleById(id) {
        try {
            return this.userRoleRepo.getRoleById(id);
        }
        catch (e) {
            this.logger.error(e);
            throw new common_1.InternalServerErrorException();
        }
    }
};
UserService = UserService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        mail_service_1.MailService,
        user_organization_repository_1.UserOrganizationRepository,
        user_project_repository_1.UserProjectRepository,
        user_role_repository_1.UserRoleRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map