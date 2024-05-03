import { Injectable } from '@nestjs/common';
import { errorResponse, sucessResponse } from 'src/utility/commonfunction';
import { ApiResponse } from 'src/utility/types';
import { Inventry } from './inventry.entity';
import { User } from 'src/api/users/user.entity';
import { BooksEntity } from 'src/api/book/book.entity';

@Injectable()
export class InventryService {
  async getAllInventry(): Promise<ApiResponse> {
    try {
      const findInventry = Inventry.createQueryBuilder('inventry');
      const data = await findInventry
        .leftJoinAndSelect(User, 'user', 'inventry.userId ::uuid = user.id')
        .leftJoinAndSelect(
          BooksEntity,
          'books',
          'inventry.bookId ::uuid = books.id',
        )
        // .select([ "user.id", "user.name"])
        .where('books.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('inventry.isDeleted = :isDeleted', { isDeleted: false })
        .andWhere('user.isDeleted = :isDeleted', { isDeleted: false })
        .orderBy('inventry.createdAt', 'DESC')
        .getRawMany();

      return sucessResponse('inventry list', data);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }

  async createInventry({
    bookId,
    userId,
  }: {
    bookId: string;
    userId: string;
  }): Promise<ApiResponse> {
    try {
      const createInventry = Inventry.create({
        bookId,
        userId,
      });
      await createInventry.save();
      if (!createInventry) {
        return errorResponse('inventry not created', null);
      }
      return sucessResponse('inventry created sucessfully', createInventry);
    } catch (error) {
      return errorResponse(error.message, null);
    }
  }
}
