import { VersionRepository } from './version.repository';
import { AddVersionDTO } from './dto/add-version.dto';
import { EditVersionDTO } from './dto/edit-version.dto';
import { VersionEntity } from './version.entity';
import { GetVersionRO } from './ro/get-version.ro';
import { HandleVersionRO } from './ro/handle-version.ro';
export declare class VersionService {
    private readonly repo;
    private readonly logger;
    constructor(repo: VersionRepository);
    getAllVersionByIdProject(projectId: number): Promise<GetVersionRO[]>;
    getOneById(projectId: number, id: number): Promise<VersionEntity>;
    getOneByCode(projectId: number, code: string): Promise<VersionEntity>;
    getOneByIdOrFail(projectId: number, id: number): Promise<VersionEntity>;
    getOneByCodeOrFail(projectId: number, code: string): Promise<VersionEntity>;
    getVersionResponse(version: VersionEntity): Promise<GetVersionRO>;
    handleVersionResponse(version: VersionEntity): Promise<HandleVersionRO>;
    checkExistCode(projectId: number, code: string, id?: number): Promise<void>;
    add(projectId: number, dto: AddVersionDTO): Promise<HandleVersionRO>;
    edit(projectId: number, id: number, dto: EditVersionDTO): Promise<HandleVersionRO>;
    delete(projectId: number, id: number): Promise<number>;
}
