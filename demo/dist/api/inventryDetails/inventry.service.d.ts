import { ApiResponse } from 'src/utility/types';
export declare class InventryService {
    getAllInventry(): Promise<ApiResponse>;
    createInventry({ bookId, userId, }: {
        bookId: string;
        userId: string;
    }): Promise<ApiResponse>;
}
