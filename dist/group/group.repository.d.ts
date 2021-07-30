import { GroupsEntity } from './group.entity';
import { Repository } from 'typeorm';
export declare class GroupRepository extends Repository<GroupsEntity> {
    getOneById(id: any): Promise<GroupsEntity>;
    getAll(): Promise<GroupsEntity[]>;
    isUserExistInGroup(idUser: number): Promise<boolean>;
}
