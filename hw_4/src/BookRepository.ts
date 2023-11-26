export interface Book {
  id: number;
  title: string;
  author: string;
}

export interface BookRepository {
  getById(id: number): Promise<Book | undefined>;
  getAll(): Promise<Book[]>;
}
