import { Repository } from 'typeorm';
import { ActionEntity } from '../entities/action.entity';
export declare class ActionRepository extends Repository<ActionEntity> {
    getIdByCode(code: string, resourceId: number): Promise<number>;
}
