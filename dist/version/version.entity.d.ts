import { ProjectEntity } from '../project/project.entity';
export declare class VersionEntity {
    id: number;
    name: string;
    code: string;
    description: string;
    startDate: Date;
    releaseDate: Date;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: number;
    projectId: number;
    project: ProjectEntity;
}
