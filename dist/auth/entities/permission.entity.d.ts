import { ResourceEntity } from './resource.entity';
import { RoleEntity } from './role.entity';
import { ActionEntity } from './action.entity';
export declare class PermissionEntity {
    id: number;
    resourceId: number;
    roleId: number;
    actionId: number;
    allowed: number;
    createdBy: number;
    updateBy: number;
    createdAt: Date;
    updatedAt: Date;
    resource: ResourceEntity;
    role: RoleEntity;
    action: ActionEntity;
}
