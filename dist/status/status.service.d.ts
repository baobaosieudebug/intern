import { StatusRepository } from './status.repository';
import { AddStatusDTO } from './dto/add-status.dto';
import { EditStatusDTO } from './dto/edit-status.dto';
import { StatusEntity } from './status.entity';
import { GetStatusRO } from './ro/get-status.ro';
import { HandleStatusRO } from './ro/handle-status.ro';
export declare class StatusService {
    private readonly repo;
    private readonly logger;
    constructor(repo: StatusRepository);
    getAllStatusByIdProject(projectId: number): Promise<GetStatusRO[]>;
    getOneById(projectId: number, id: number): Promise<StatusEntity>;
    getOneByCode(projectId: number, code: string): Promise<StatusEntity>;
    getOneByIdOrFail(projectId: number, id: number): Promise<StatusEntity>;
    getOneByCodeOrFail(projectId: number, code: string): Promise<StatusEntity>;
    getStatusResponse(status: StatusEntity): Promise<GetStatusRO>;
    handleStatusResponse(status: StatusEntity): Promise<HandleStatusRO>;
    checkExistCode(projectId: number, code: string, id?: number): Promise<void>;
    add(projectId: number, dto: AddStatusDTO): Promise<HandleStatusRO>;
    edit(projectId: number, id: number, dto: EditStatusDTO): Promise<HandleStatusRO>;
    delete(projectId: number, id: number): Promise<number>;
}
