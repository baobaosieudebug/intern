import { GroupsEntity } from './group.entity';
import { GroupRepository } from './group.repository';
import { UserService } from 'src/user/user.service';
import { EditGroupDTO } from './dto/edit-group.dto';
import { AddGroupDTO } from './dto/add-group.dto';
import { GetGroupRO } from './ro/get-group.ro';
import { HandleGroupRO } from './ro/handle-group.ro';
export declare class GroupsService {
    private readonly repo;
    private readonly userService;
    private readonly logger;
    constructor(repo: GroupRepository, userService: UserService);
    getOneById(id: number): Promise<GroupsEntity>;
    getOneOrFail(id: number): Promise<GroupsEntity>;
    getAll(): Promise<GetGroupRO[]>;
    getGroupResponse(group: GroupsEntity): Promise<GetGroupRO>;
    handleGroupResponse(group: GroupsEntity): Promise<HandleGroupRO>;
    createGroup(dto: AddGroupDTO): Promise<HandleGroupRO>;
    edit(id: number, dto: EditGroupDTO): Promise<HandleGroupRO>;
    delete(id: number): Promise<HandleGroupRO>;
}
