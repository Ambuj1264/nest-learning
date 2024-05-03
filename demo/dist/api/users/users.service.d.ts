import { Repository } from 'typeorm';
import { User } from './user.entity';
import { ApiResponse } from 'src/utility/types';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<ApiResponse>;
    findOne(id: string): Promise<ApiResponse>;
    create(user: Partial<User>): Promise<ApiResponse>;
    update(id: string, user: Partial<User>): Promise<ApiResponse>;
    delete(id: string): Promise<ApiResponse>;
    login(email: string, password: string): Promise<ApiResponse>;
}
