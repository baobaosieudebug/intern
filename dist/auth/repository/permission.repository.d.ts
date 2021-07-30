import { Repository } from 'typeorm';
import { PermissionEntity } from '../entities/permission.entity';
export declare class PermissionRepository extends Repository<PermissionEntity> {
    isExistPer(actionId: number, resourceId: number, roleId: number): Promise<boolean>;
}
