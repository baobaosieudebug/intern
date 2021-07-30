import { ProjectEntity } from '../project/project.entity';
export declare class StatusEntity {
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
