import { ApiResponse } from 'src/utility/types';
import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<ApiResponse>;
    findOne(id: string): Promise<ApiResponse>;
    login(user: Partial<User>): Promise<ApiResponse>;
    create(user: Partial<User>): Promise<ApiResponse>;
    update(id: string, user: Partial<User>): Promise<ApiResponse>;
    delete(id: string): Promise<ApiResponse>;
}
