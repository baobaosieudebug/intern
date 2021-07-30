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
exports.AddOrganizationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AddOrganizationDTO {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        example: 'APPLE',
    }),
    class_validator_1.Length(3, 30),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Apple.com' }),
    class_validator_1.Length(5, 50),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "domain", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Organization of Apple' }),
    class_validator_1.Length(5, 255),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: '19111 Pruners Avenue Cupertino, CA 95014' }),
    class_validator_1.Length(5, 255),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "address", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Cupertino, California' }),
    class_validator_1.Length(5, 50),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "city", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Planing' }),
    class_validator_1.Length(5, 50),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "plan", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'America' }),
    class_validator_1.Length(5, 20),
    __metadata("design:type", String)
], AddOrganizationDTO.prototype, "country", void 0);
exports.AddOrganizationDTO = AddOrganizationDTO;
//# sourceMappingURL=add-organization.dto.js.map