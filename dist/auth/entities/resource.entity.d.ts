import { ActionEntity } from './action.entity';
import { PermissionEntity } from './permission.entity';
export declare class ResourceEntity {
    id: number;
    name: string;
    code: string;
    actions: ActionEntity[];
    permissions: PermissionEntity[];
}
