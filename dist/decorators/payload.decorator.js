"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
exports.Payload = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const auth = request.headers.authorization;
    if (!auth) {
        throw new common_1.ForbiddenException('Authorization header not null');
    }
    const authHeader = auth.split(' ');
    if (authHeader[0] !== 'Bearer') {
        throw new common_1.ForbiddenException('Invalid token');
    }
    const token = authHeader[1];
    try {
        jwt.verify(token, 'SECRET');
        const payload = jwt.decode(token);
        return payload;
    }
    catch (err) {
        throw new common_1.ForbiddenException('FORBIDDEN');
    }
});
//# sourceMappingURL=payload.decorator.js.map