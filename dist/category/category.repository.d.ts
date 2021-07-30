import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
export declare class CategoryRepository extends Repository<CategoryEntity> {
    getAll(projectId: number): Promise<CategoryEntity[]>;
    getById(id: number, projectId: number): Promise<CategoryEntity>;
    getByCode(code: string, projectId: number): Promise<CategoryEntity>;
    countCategory(projectId: number, code: string, id?: number): Promise<number>;
}
