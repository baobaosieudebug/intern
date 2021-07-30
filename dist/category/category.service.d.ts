import { CategoryRepository } from './category.repository';
import { AddCategoryDTO } from './dto/add-category.dto';
import { EditCategoryDTO } from './dto/edit-category.dto';
import { CategoryEntity } from './category.entity';
import { GetCategoryRO } from './ro/get-category.ro';
import { HandleCategoryRO } from './ro/handle-category.ro';
import { AuthService } from '../auth/auth.service';
import { ActionRepository } from '../auth/repository/action.repository';
import { ResourceRepository } from '../auth/repository/resource.repository';
export declare class CategoryService {
    private readonly repo;
    private readonly authService;
    private readonly actionRepo;
    private readonly resourceRepo;
    private readonly logger;
    constructor(repo: CategoryRepository, authService: AuthService, actionRepo: ActionRepository, resourceRepo: ResourceRepository);
    getAllCategoryByIdProject(projectId: number): Promise<GetCategoryRO[]>;
    getOneById(projectId: number, id: number): Promise<CategoryEntity>;
    getOneByCode(projectId: number, code: string): Promise<CategoryEntity>;
    getOneByIdOrFail(projectId: number, id: number): Promise<CategoryEntity>;
    getOneByCodeOrFail(projectId: number, code: string): Promise<CategoryEntity>;
    getCategoryResponse(category: CategoryEntity): Promise<GetCategoryRO>;
    handleCategoryResponse(category: CategoryEntity): Promise<HandleCategoryRO>;
    checkExistCode(projectId: number, code: string, id?: number): Promise<void>;
    isExistPermission(actionId: number, resourceId: number, roleId: number): Promise<void>;
    add(payload: any, projectId: number, dto: AddCategoryDTO): Promise<HandleCategoryRO>;
    edit(payload: any, projectId: number, id: number, dto: EditCategoryDTO): Promise<HandleCategoryRO>;
    delete(payload: any, projectId: number, id: number): Promise<number>;
}
