import { GroupsService } from './group.service';
import { EditGroupDTO } from './dto/edit-group.dto';
import { AddGroupDTO } from './dto/add-group.dto';
import { GetGroupRO } from './ro/get-group.ro';
import { HandleGroupRO } from './ro/handle-group.ro';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    getOneById(idGroup: number): Promise<GetGroupRO>;
    getAll(): Promise<GetGroupRO[]>;
    createGroup(dto: AddGroupDTO): Promise<HandleGroupRO>;
    edit(group: EditGroupDTO, id: number): Promise<HandleGroupRO>;
    delete(id: number): Promise<HandleGroupRO>;
}
