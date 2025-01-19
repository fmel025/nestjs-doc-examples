import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { BookDto } from './dtos';
import { plainToInstance } from 'class-transformer';
import { BookQueryDoc } from './docs';
import { Books } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async getBooks(bookDto: BookDto): Promise<Books[]> {
    // Its bad practice to execute db code on services
    // Use instead repository
    const filters = plainToInstance(BookQueryDoc, bookDto, {
      excludeExtraneousValues: true,
    });
    console.log(filters);

    const books = await this.prisma.books.findMany({ where: filters });

    return books;
  }
}
