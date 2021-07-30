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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payload_decorator_1 = require("../decorators/payload.decorator");
const user_service_1 = require("./user.service");
const edit_user_dto_1 = require("./dto/edit-user.dto");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getProfile(payload) {
        const user = await this.usersService.getOneByUsername(payload.username);
        return this.usersService.mappingSelfUserRO(user);
    }
    async getInfoByUsername(payload, username) {
        return await this.usersService.getOneWithOwner(payload, username);
    }
    async joinOrg(token) {
        return await this.usersService.joinOrg(token);
    }
    async edit(payload, dto, id) {
        return await this.usersService.edit(payload, id, dto);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get('/profile'),
    __param(0, payload_decorator_1.Payload()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get('/:username'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getInfoByUsername", null);
__decorate([
    common_1.Get('/join/organization'),
    __param(0, common_1.Query('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "joinOrg", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, edit_user_dto_1.EditUserDTO, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "edit", null);
UserController = __decorate([
    swagger_1.ApiTags('User'),
    common_1.Controller('user'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map