import { Repository } from 'typeorm';
import { UserRoleEntity } from '../entities/user-role.entity';
export declare class UserRoleRepository extends Repository<UserRoleEntity> {
    getListAdmin(roleId: number): Promise<UserRoleEntity[]>;
    getRoleById(userId: number): Promise<UserRoleEntity>;
}
