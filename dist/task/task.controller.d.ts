import { TaskService } from './task.service';
import { AddTaskDTO } from './dto/add-task.dto';
import { TaskRO } from './ro/task.ro';
import { EditTaskDTO } from './dto/edit-task.dto';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(payload: any, projectCode: string): Promise<TaskRO[]>;
    create(payload: any, projectCode: string, dto: AddTaskDTO): Promise<TaskRO>;
    edit(payload: any, projectCode: string, id: number, dto: EditTaskDTO): Promise<TaskRO>;
    delete(payload: any, code: string): Promise<number>;
}
