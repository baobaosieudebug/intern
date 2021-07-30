import { BaseEntity } from 'typeorm';
import { ProjectEntity } from '../../project/project.entity';
import { UserEntity } from './user.entity';
export declare class UserProjectEntity extends BaseEntity {
    id: number;
    userId: number;
    projectId: number;
    attend: Date;
    updatedAt: Date;
    project: ProjectEntity;
    user: UserEntity;
}
