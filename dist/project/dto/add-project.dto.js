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
exports.AddProjectDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddProjectDTO {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        example: 'Development Operating System For IOS 10 ',
    }),
    class_validator_1.Length(10, 255),
    __metadata("design:type", String)
], AddProjectDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'IOS-001' }),
    class_validator_1.Length(5, 20),
    __metadata("design:type", String)
], AddProjectDTO.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Project of Apple' }),
    class_validator_1.Length(5, 255),
    __metadata("design:type", String)
], AddProjectDTO.prototype, "description", void 0);
exports.AddProjectDTO = AddProjectDTO;
//# sourceMappingURL=add-project.dto.js.map