import { UserEntity } from '../user/entities/user.entity';
import { ProjectEntity } from 'src/project/project.entity';
export declare class TaskEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    dateBegin: Date;
    dateEnd: Date;
    createdAt: Date;
    createUserId: number;
    assignUserId: number;
    isDeleted: number;
    projectId: number;
    userAssign: UserEntity;
    user: UserEntity;
    project: ProjectEntity;
}
