import { CategoryService } from './category.service';
import { AddCategoryDTO } from './dto/add-category.dto';
import { EditCategoryDTO } from './dto/edit-category.dto';
import { GetCategoryRO } from './ro/get-category.ro';
import { HandleCategoryRO } from './ro/handle-category.ro';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getAll(projectId: number): Promise<GetCategoryRO[]>;
    getCategoryById(projectId: number, id: number): Promise<GetCategoryRO>;
    getCategoryByCode(projectId: number, code: string): Promise<GetCategoryRO>;
    create(payload: any, projectId: number, dto: AddCategoryDTO): Promise<HandleCategoryRO>;
    edit(payload: any, projectId: number, id: number, dto: EditCategoryDTO): Promise<HandleCategoryRO>;
    delete(payload: any, projectId: number, id: number): Promise<number>;
}
