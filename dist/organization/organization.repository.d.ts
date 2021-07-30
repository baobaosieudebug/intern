import { OrganizationEntity } from './organization.entity';
import { Repository } from 'typeorm';
export declare class OrganizationRepository extends Repository<OrganizationEntity> {
    getByCode(code: string): Promise<OrganizationEntity>;
    isOrgCodeExist(code: string): Promise<boolean>;
    isOwnerOrg(code: string, ownerId: number): Promise<boolean>;
    isExistOwner(ownerId: number): Promise<boolean>;
    isOwnerDomain(domain: string, ownerId: number): Promise<boolean>;
}
