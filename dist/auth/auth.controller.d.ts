import { LoginUserDTO } from '../user/dto/login-user.dto';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from '../user/dto/register-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: RegisterUserDTO): Promise<import("../user/ro/user.ro").UserRO>;
    login(user: LoginUserDTO): Promise<{
        id: number;
        username: string;
        organizationCode: import("../organization/organization.entity").OrganizationEntity;
        email: string;
        token: string;
    }>;
    addRole(payload: any, data: any): Promise<any>;
}
