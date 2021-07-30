"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const aws_sdk_1 = require("aws-sdk");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    aws_sdk_1.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_ACCESS_KEY,
        region: process.env.AWS_BUCKET_REGION,
    });
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle('Get-started-project')
        .setDescription('DBS Get started project for NestJS API')
        .setVersion('0.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swagger);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3002);
}
bootstrap();
//# sourceMappingURL=main.js.map