import { UserService } from './user.service';
import { EditUserDTO } from './dto/edit-user.dto';
import { UserRO } from './ro/user.ro';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    getProfile(payload: any): Promise<import("./ro/self-user.ro").SelfUserRO>;
    getInfoByUsername(payload: any, username: string): Promise<UserRO | import("./ro/self-user.ro").SelfUserRO>;
    joinOrg(token: any): Promise<import("./entities/user-organization.entity").UserOrganizationEntity>;
    edit(payload: any, dto: EditUserDTO, id: number): Promise<UserRO>;
}
