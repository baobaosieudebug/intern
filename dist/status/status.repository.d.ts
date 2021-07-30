import { Repository } from 'typeorm';
import { StatusEntity } from './status.entity';
export declare class StatusRepository extends Repository<StatusEntity> {
    getAll(projectId: number): Promise<StatusEntity[]>;
    getById(id: number, projectId: number): Promise<StatusEntity>;
    getByCode(code: string, projectId: number): Promise<StatusEntity>;
    countStatus(projectId: number, code: string, id?: number): Promise<number>;
}
