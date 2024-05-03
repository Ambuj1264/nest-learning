import { Book } from './data/book.dto';
import { BookService } from './book.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse } from 'src/utility/types';
import { BookInterceptor } from './book.interceptor';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  // @UseGuards(new BookGuard())
  @UseInterceptors(BookInterceptor)
  getallBooks(@Res() res: Response): any {
    // return this.bookService.findAllBooks();
    // return res.json(req.user)
    return res.json();
  }
  @Put('/update')
  updateBook(@Body() book: Book): Promise<ApiResponse> {
    return this.bookService.updateBookServices(book);
  }

  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: string): Promise<ApiResponse> {
    return this.bookService.deleteBookServices(bookId);
  }

  @Post('/add')
  addBook(@Body() book: Book): Promise<ApiResponse> {
    return this.bookService.addBookService(book);
  }
  @Post()
  helloWorld() {
    return 'hello world';
  }
}
