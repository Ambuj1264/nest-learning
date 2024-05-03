import { Book } from './data/book.dto';
import { ApiResponse } from 'src/utility/types';
export declare class BookService {
    books: Book[];
    addBookService(book: Book): Promise<ApiResponse>;
    updateBookServices(book: Book): Promise<ApiResponse>;
    deleteBookServices(bookId: string): Promise<ApiResponse>;
    findAllBooks(): Promise<ApiResponse>;
}
