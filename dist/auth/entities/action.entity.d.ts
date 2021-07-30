import { ResourceEntity } from './resource.entity';
import { PermissionEntity } from './permission.entity';
export declare class ActionEntity {
    id: number;
    name: string;
    code: string;
    resourceId: number;
    permissions: PermissionEntity[];
    resource: ResourceEntity;
}
