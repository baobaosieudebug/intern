import { VersionService } from './version.service';
import { AddVersionDTO } from './dto/add-version.dto';
import { EditVersionDTO } from './dto/edit-version.dto';
import { GetVersionRO } from './ro/get-version.ro';
import { HandleVersionRO } from './ro/handle-version.ro';
export declare class VersionController {
    private versionService;
    constructor(versionService: VersionService);
    getAll(projectId: number): Promise<GetVersionRO[]>;
    getVersionById(projectId: number, id: number): Promise<GetVersionRO>;
    getVersionByCode(projectId: number, code: string): Promise<GetVersionRO>;
    create(projectId: number, dto: AddVersionDTO): Promise<HandleVersionRO>;
    edit(projectId: number, id: number, dto: EditVersionDTO): Promise<HandleVersionRO>;
    delete(projectId: number, id: number): Promise<number>;
}
