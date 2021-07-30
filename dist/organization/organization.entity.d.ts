import { ProjectEntity } from '../project/project.entity';
import { UserEntity } from '../user/entities/user.entity';
import { UserOrganizationEntity } from '../user/entities/user-organization.entity';
import { RoleEntity } from '../auth/entities/role.entity';
export declare class OrganizationEntity {
    id: number;
    code: string;
    name: string;
    domain: string;
    logo: string;
    description: string;
    address: string;
    city: string;
    plan: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
    ownerId: number;
    isDeleted: number;
    user: UserEntity;
    projects: ProjectEntity[];
    userOrganization: UserOrganizationEntity;
    roles: RoleEntity[];
}
