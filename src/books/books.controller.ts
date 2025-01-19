import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookDto } from './dtos';
import { Books } from '@prisma/client';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // Add your book-related API endpoints here
  @ApiOperation({
    description: 'Get all books',
    summary: 'Get all books',
  })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @Get()
  async getAllBooks(@Query() bookDto: BookDto): Promise<Books[]> {
    // Implement logic to fetch all books
    const books = await this.booksService.getBooks(bookDto);
    return books;
  }
}
