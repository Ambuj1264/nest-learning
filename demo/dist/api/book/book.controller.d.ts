import { Book } from './data/book.dto';
import { BookService } from './book.service';
import { ApiResponse } from 'src/utility/types';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getallBooks(res: Response): any;
    updateBook(book: Book): Promise<ApiResponse>;
    deleteBook(bookId: string): Promise<ApiResponse>;
    addBook(book: Book): Promise<ApiResponse>;
    helloWorld(): string;
}
