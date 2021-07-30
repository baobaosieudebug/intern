import { BaseEntity } from 'typeorm';
import { OrganizationEntity } from '../../organization/organization.entity';
import { UserEntity } from './user.entity';
export declare class UserOrganizationEntity extends BaseEntity {
    id: number;
    userId: number;
    organizationId: number;
    active: boolean;
    attend: Date;
    updatedAt: Date;
    organization: OrganizationEntity;
    user: UserEntity;
}
