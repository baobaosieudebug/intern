import { ConfigService } from '@nestjs/config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
export declare class JwtConfigService implements JwtOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createJwtOptions(): JwtModuleOptions;
}
