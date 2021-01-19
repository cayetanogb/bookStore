import { Injectable } from '@angular/core';
import { Book } from './../../model/book';
import { BOOKS } from './../../data/mock-books';

// Servicios
import { ConfigService } from '../config/config.service';
import { LoggerService } from '../logger/logger.service';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private booksList: Book[] = BOOKS;

  constructor(private configService: ConfigService,
              private loggerService: LoggerService) {

    loggerService.log('llamando constructor bookStoreService');
  }

  // get the books
  getBooks() {
    return this.booksList;
  }

  // get a book
  getBook(isbn: number): Book {
    const selectedBook = this.booksList.filter(book => book.isbn === isbn);

    if (selectedBook.length > 0) {
      return selectedBook[0];
    }
    
    return null;
  }

  // delete book
  deleteBook(isbn: number): Book[] {
    this.booksList = this.booksList.filter(book => book.isbn === isbn);
    return this.booksList;
  }
}
