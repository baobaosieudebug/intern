import { TypeRepository } from './type.repository';
import { AddTypeDTO } from './dto/add-type.dto';
import { EditTypeDTO } from './dto/edit-type.dto';
import { TypeEntity } from './type.entity';
import { GetTypeRO } from './ro/get-type.ro';
import { HandleTypeRO } from './ro/handle-type.ro';
export declare class TypeService {
    private readonly repo;
    private readonly logger;
    constructor(repo: TypeRepository);
    getAllTypeByIdProject(projectId: number): Promise<GetTypeRO[]>;
    getOneById(projectId: number, id: number): Promise<TypeEntity>;
    getOneByCode(projectId: number, code: string): Promise<TypeEntity>;
    getOneByIdOrFail(projectId: number, id: number): Promise<TypeEntity>;
    getOneByCodeOrFail(projectId: number, code: string): Promise<TypeEntity>;
    getTypeResponse(type: TypeEntity): Promise<GetTypeRO>;
    handleTypeResponse(type: TypeEntity): Promise<HandleTypeRO>;
    checkExistCode(projectId: number, code: string, id?: number): Promise<void>;
    add(projectId: number, dto: AddTypeDTO): Promise<HandleTypeRO>;
    edit(projectId: number, id: number, dto: EditTypeDTO): Promise<HandleTypeRO>;
    delete(projectId: number, id: number): Promise<number>;
}
