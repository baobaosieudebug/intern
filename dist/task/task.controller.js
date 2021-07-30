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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const payload_decorator_1 = require("../decorators/payload.decorator");
const task_service_1 = require("./task.service");
const add_task_dto_1 = require("./dto/add-task.dto");
const edit_task_dto_1 = require("./dto/edit-task.dto");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getAll(payload, projectCode) {
        return await this.taskService.getAll(payload, projectCode);
    }
    async create(payload, projectCode, dto) {
        return await this.taskService.create(payload, projectCode, dto);
    }
    async edit(payload, projectCode, id, dto) {
        return await this.taskService.edit(payload, projectCode, id, dto);
    }
    async delete(payload, code) {
        return await this.taskService.delete(payload, code);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Get(),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Query('projectCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAll", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'Created' }),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Query('projectCode')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, add_task_dto_1.AddTaskDTO]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Put(':id'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Query('projectCode')),
    __param(2, common_1.Param('id')),
    __param(3, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, edit_task_dto_1.EditTaskDTO]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "edit", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Success' }),
    common_1.Delete(':code'),
    __param(0, payload_decorator_1.Payload()),
    __param(1, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
TaskController = __decorate([
    swagger_1.ApiTags('Task'),
    common_1.Controller('task'),
    swagger_1.ApiNotFoundResponse({ description: 'Not Found' }),
    swagger_1.ApiInternalServerErrorResponse({ description: 'Internal Server Error' }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map