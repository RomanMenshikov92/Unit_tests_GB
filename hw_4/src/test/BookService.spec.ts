import { mock, instance, when, verify } from "ts-mockito";
import { BookService } from "../BookService";
import { BookRepository, Book } from "../BookRepository";

describe("BookService", () => {
  let bookService: BookService;
  let mockBookRepository: BookRepository;

  beforeEach(() => {
    mockBookRepository = mock<BookRepository>();
    bookService = new BookService(instance(mockBookRepository));
  });

  it("should get book by id", async () => {
    const testBook: Book = { id: 1, title: "Test Book", author: "Test Author" };
    when(mockBookRepository.getById(1)).thenResolve(testBook);

    const result = await bookService.getBookById(1);
    expect(result).toEqual(testBook);

    verify(mockBookRepository.getById(1)).once();
  });

  it("should get all books", async () => {
    const testBooks: Book[] = [
      { id: 1, title: "Test Book 1", author: "Test Author 1" },
      { id: 2, title: "Test Book 2", author: "Test Author 2" },
    ];
    when(mockBookRepository.getAll()).thenResolve(testBooks);

    const result = await bookService.getAllBooks();
    expect(result).toEqual(testBooks);

    verify(mockBookRepository.getAll()).once();
  });
});
