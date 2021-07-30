import { Repository } from 'typeorm';
import { TypeEntity } from './type.entity';
export declare class TypeRepository extends Repository<TypeEntity> {
    getAll(projectId: number): Promise<TypeEntity[]>;
    getById(id: number, projectId: number): Promise<TypeEntity>;
    getByCode(code: string, projectId: number): Promise<TypeEntity>;
    countType(projectId: number, code: string, id?: number): Promise<number>;
}
