import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository extends Repository<UserEntity> {
    getOneByUsername(username: string): Promise<UserEntity>;
    getOneById(id: number): Promise<UserEntity>;
    getOneByEmail(email: string): Promise<UserEntity>;
    isExistEmail(email: string): Promise<boolean>;
    isExistUsername(username: string): Promise<boolean>;
    isExistCode(code: string): Promise<boolean>;
}
