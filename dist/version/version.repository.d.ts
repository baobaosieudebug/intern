import { Repository } from 'typeorm';
import { VersionEntity } from './version.entity';
export declare class VersionRepository extends Repository<VersionEntity> {
    getAll(projectId: number): Promise<VersionEntity[]>;
    getById(id: number, projectId: number): Promise<VersionEntity>;
    getByCode(code: string, projectId: number): Promise<VersionEntity>;
    countVersion(projectId: number, code: string, id?: number): Promise<number>;
}
