import { ProjectEntity } from '../project/project.entity';
export declare class TypeEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    isDeleted: number;
    createdAt: Date;
    updatedAt: Date;
    projectId: number;
    project: ProjectEntity;
}
