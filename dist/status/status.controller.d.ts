import { StatusService } from './status.service';
import { AddStatusDTO } from './dto/add-status.dto';
import { EditStatusDTO } from './dto/edit-status.dto';
import { GetStatusRO } from './ro/get-status.ro';
import { HandleStatusRO } from './ro/handle-status.ro';
export declare class StatusController {
    private statusService;
    constructor(statusService: StatusService);
    getAll(projectId: number): Promise<GetStatusRO[]>;
    getStatusById(projectId: number, id: number): Promise<GetStatusRO>;
    getStatusByCode(projectId: number, code: string): Promise<GetStatusRO>;
    create(projectId: number, dto: AddStatusDTO): Promise<HandleStatusRO>;
    edit(projectId: number, id: number, dto: EditStatusDTO): Promise<HandleStatusRO>;
    delete(projectId: number, id: number): Promise<number>;
}
