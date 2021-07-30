import { OrganizationEntity } from '../../organization/organization.entity';
import { PermissionEntity } from './permission.entity';
import { UserRoleEntity } from '../../user/entities/user-role.entity';
export declare class RoleEntity {
    id: number;
    name: string;
    code: string;
    organizationId: number;
    createdBy: number;
    updateBy: number;
    createdAt: Date;
    updatedAt: Date;
    permissions: PermissionEntity[];
    organization: OrganizationEntity;
    userRole: UserRoleEntity;
}
