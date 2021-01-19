import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';

// Servicios
import { BookStoreService } from './services/book-store/book-store.service';
import { ConfigService } from './services/config/config.service';
import { LoggerService } from './services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  bookList: Book[] = [];
  pathImg: string;

  //libro seleccionado
  selectedBook: Book;

  // Usamos la inyeccion de servicios en el constructor
  constructor(private bookStoreService: BookStoreService,
              private configService: ConfigService,
              private loggerService: LoggerService) {

    this.getBooks();
    this.pathImg = this.configService.pathImg;
  }

  ngOnInit(): void {
  }

  getBooks(): void {

    // cargamos los libros del servicio
    this.bookList = this.bookStoreService.getBooks();
  }

  setSelectedBook(aBook: Book): void {
    this.selectedBook = aBook;
  }

  receiveBook(event): void {

    const myBook: Book = event;
    this.deleteBook( myBook.isbn );
  }

  deleteBook(isbn: number): void {
    this.selectedBook = null;
    this.bookList = this.bookList.filter( book => book.isbn !== isbn);
  }

  borrarFiltro(): void {
    this.selectedBook = null;
    this.bookList = this.bookStoreService.getBooks();
  }

}
