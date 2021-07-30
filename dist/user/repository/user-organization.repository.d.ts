import { Repository } from 'typeorm';
import { UserOrganizationEntity } from '../entities/user-organization.entity';
export declare class UserOrganizationRepository extends Repository<UserOrganizationEntity> {
    isExistUser(userId: number, organizationId: number): Promise<boolean>;
    getListUser(organizationId: number): Promise<UserOrganizationEntity[]>;
}
