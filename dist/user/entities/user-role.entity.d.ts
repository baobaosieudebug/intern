import { BaseEntity } from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from '../../auth/entities/role.entity';
export declare class UserRoleEntity extends BaseEntity {
    userId: number;
    roleId: number;
    createdBy: number;
    updateBy: number;
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
    role: RoleEntity;
}
