import { ProjectEntity } from '../project/project.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: number;
    projectId: number;
    project: ProjectEntity;
}
