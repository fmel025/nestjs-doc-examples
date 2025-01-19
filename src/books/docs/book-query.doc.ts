import { Expose, Transform } from 'class-transformer';
import { Prisma } from '@prisma/client';

export class BookQueryDoc {
  @Expose()
  @Transform(({ value }: { value: string[] }) => {
    if (!value) return;
    return {
      in: value,
    } as Prisma.StringFilter;
  })
  genre: Prisma.StringFilter;

  @Expose()
  @Transform(({ value }: { value: string[] }) => {
    if (!value) return;
    return {
      in: value,
    } as Prisma.StringFilter;
  })
  subgenre: Prisma.StringFilter;

  @Expose()
  @Transform(({ value }: { value: string }) => {
    if (!value) return;
    return {
      contains: value,
      mode: 'insensitive',
    } as Prisma.StringFilter;
  })
  title: string;
}
