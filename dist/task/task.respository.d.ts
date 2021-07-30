import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
export declare class TaskRepository extends Repository<TaskEntity> {
    getById(id: number): Promise<TaskEntity>;
    getAll(projectId: number): Promise<TaskEntity[]>;
    getByCode(code: string): Promise<TaskEntity>;
    isExistTaskCode(code: string, projectId: number): Promise<boolean>;
    isOwner(code: string, createUserId: number): Promise<boolean>;
}
