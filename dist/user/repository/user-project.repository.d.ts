import { Repository } from 'typeorm';
import { UserProjectEntity } from '../entities/user-project.entity';
export declare class UserProjectRepository extends Repository<UserProjectEntity> {
    isUserExist(projectId: number, userId: number): Promise<boolean>;
    getListUser(projectId: number): Promise<UserProjectEntity[]>;
    getListProject(userId: number): Promise<UserProjectEntity[]>;
}
