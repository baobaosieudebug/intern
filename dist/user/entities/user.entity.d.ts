import { ProjectEntity } from '../../project/project.entity';
import { TaskEntity } from '../../task/task.entity';
import { OrganizationEntity } from '../../organization/organization.entity';
import { UserOrganizationEntity } from './user-organization.entity';
import { UserProjectEntity } from './user-project.entity';
import { UserRoleEntity } from './user-role.entity';
export declare class UserEntity {
    id: number;
    code: string;
    username: string;
    email: string;
    password: string;
    status: string;
    phone: string;
    avatar: string;
    isDeleted: number;
    createdAt: Date;
    updatedAt: Date;
    organization: OrganizationEntity;
    project: ProjectEntity;
    projectAdmin: ProjectEntity;
    tasksAssign: TaskEntity[];
    tasks: TaskEntity[];
    userOrganization: UserOrganizationEntity;
    userProject: UserProjectEntity;
    userRole: UserRoleEntity;
}
