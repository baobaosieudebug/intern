import { ProjectEntity } from './project.entity';
import { Repository } from 'typeorm';
export declare class ProjectRepository extends Repository<ProjectEntity> {
    getById(id: any): Promise<ProjectEntity>;
    getAll(organizationId: number): Promise<ProjectEntity[]>;
    getByCode(code: any): Promise<ProjectEntity>;
    checkProjectExist(id: number): Promise<boolean>;
    isProjectExist(organizationId: number, code: string): Promise<boolean>;
    isOwner(code: string, createById: number): Promise<boolean>;
    isExistCode(id: number, code: string): Promise<boolean>;
    getListProject(organizationId: number): Promise<ProjectEntity[]>;
}
