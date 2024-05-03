import { InventryService } from './inventry.service';
import { ApiResponse } from 'src/utility/types';
export declare class InventryController {
    private inventryService;
    constructor(inventryService: InventryService);
    getAllInventry(): Promise<ApiResponse>;
    getInventryById(): string;
    createInventry(body: Intentry): Promise<ApiResponse>;
}
interface Intentry {
    bookId: string;
    userId: string;
}
export {};
