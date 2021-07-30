import { TypeService } from './type.service';
import { AddTypeDTO } from './dto/add-type.dto';
import { EditTypeDTO } from './dto/edit-type.dto';
import { GetTypeRO } from './ro/get-type.ro';
import { HandleTypeRO } from './ro/handle-type.ro';
export declare class TypeController {
    private typeService;
    constructor(typeService: TypeService);
    getAll(projectId: number): Promise<GetTypeRO[]>;
    getTypeById(projectId: number, id: number): Promise<GetTypeRO>;
    getTypeByCode(projectId: number, code: string): Promise<GetTypeRO>;
    create(projectId: number, dto: AddTypeDTO): Promise<HandleTypeRO>;
    edit(projectId: number, id: number, dto: EditTypeDTO): Promise<HandleTypeRO>;
    delete(projectId: number, id: number): Promise<number>;
}
