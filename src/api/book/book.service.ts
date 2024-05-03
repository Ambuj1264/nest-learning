import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { BooksEntity } from './book.entity';
import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { ApiResponse } from 'src/utility/types';
@Injectable()
export class BookService {
  public books: Book[] = [];

  async addBookService(book: Book): Promise<ApiResponse> {
    try {
      const { title, author, published } = book;
      const createBook = BooksEntity.create({
        title,
        author,
        published,
      });

      await createBook.save();
      if (!createBook) {
        return errorResponse('book not added', null);
      }
      return sucessResponse('book added sucessfully', createBook);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async updateBookServices(book: Book): Promise<ApiResponse> {
    try {
      const { id, title, author, published } = book;

      const updateBook = await BooksEntity.update(
        { id, isDeleted: false },
        {
          title,
          author,
          published,
        },
      );

      if (!updateBook.affected) {
        return errorResponse('book not updated', null);
      }
      return sucessResponse('book updated sucessfully', updateBook);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async deleteBookServices(bookId: string): Promise<ApiResponse> {
    try {
      const id = bookId;
      const deleteBook = await BooksEntity.update(
        { id, isDeleted: false },
        { isDeleted: true },
      );
      if (!deleteBook.affected) {
        return errorResponse('book not deleted', null);
      }
      return sucessResponse('book deleted sucessfully', deleteBook);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async findAllBooks(): Promise<ApiResponse> {
    try {
      const findAll = await BooksEntity.find({ where: { isDeleted: false } });
      return sucessResponse('book list', findAll);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
