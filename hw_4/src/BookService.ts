import { BookRepository, Book } from "./BookRepository";

export class BookService {
  constructor(private bookRepository: BookRepository) {}

  async getBookById(id: number): Promise<Book | undefined> {
    return this.bookRepository.getById(id);
  }

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.getAll();
  }
}
