import { ProjectService } from './project.service';
import { AddProjectDTO } from './dto/add-project.dto';
import { EditProjectDTO } from './dto/edit-project.dto';
import { ProjectRO } from './ro/project.ro';
import { UserRO } from '../user/ro/user.ro';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    getListUserByUser(payload: any, projectCode: string): Promise<UserRO[]>;
    getInfo(payload: any, code: string): Promise<ProjectRO>;
    create(payload: any, dto: AddProjectDTO): Promise<ProjectRO>;
    addUser(payload: any, projectCode: string, id: number): Promise<UserRO>;
    getListUser(payload: any, code: string): Promise<UserRO[]>;
    getList(payload: any): Promise<ProjectRO[]>;
    getListAdmin(payload: any, code: string): Promise<UserRO[]>;
    edit(payload: any, code: string, dto: EditProjectDTO): Promise<ProjectRO>;
    delete(payload: any, code: string): Promise<number>;
}
