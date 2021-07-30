import { HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDTO } from '../user/dto/register-user.dto';
import { LoginUserDTO } from '../user/dto/login-user.dto';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/repository/user.repository';
import { UserEntity } from '../user/entities/user.entity';
import { UserRO } from '../user/ro/user.ro';
import { OrganizationService } from '../organization/organization.service';
import { PermissionRepository } from './repository/permission.repository';
import { ActionRepository } from './repository/action.repository';
import { ResourceRepository } from './repository/resource.repository';
export declare class AuthService {
    private readonly jwtService;
    private readonly httpService;
    private readonly userService;
    private readonly userRepo;
    private readonly orgService;
    private readonly permissionRepo;
    private readonly actionRepo;
    private readonly resourceRepo;
    private readonly logger;
    constructor(jwtService: JwtService, httpService: HttpService, userService: UserService, userRepo: UserRepository, orgService: OrganizationService, permissionRepo: PermissionRepository, actionRepo: ActionRepository, resourceRepo: ResourceRepository);
    isExistUser(email: string, username: string): Promise<void>;
    createCode(): Promise<string>;
    mappingUserRO(user: UserEntity): UserRO;
    register(user: RegisterUserDTO): Promise<UserRO>;
    login(data: LoginUserDTO): Promise<{
        id: number;
        username: string;
        organizationCode: import("../organization/organization.entity").OrganizationEntity;
        email: string;
        token: string;
    }>;
    getUserToken(user: any): Promise<string>;
    addPermission(payload: any, data: any): Promise<any>;
    addRole(payload: any, data: any): Promise<any>;
    isExistPermission(actionId: number, resourceId: number, roleId: number): Promise<boolean>;
}
