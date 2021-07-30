import { Repository } from 'typeorm';
import { ResourceEntity } from '../entities/resource.entity';
export declare class ResourceRepository extends Repository<ResourceEntity> {
    getIdByCode(code: string): Promise<number>;
}
