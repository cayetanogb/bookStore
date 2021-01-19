import { Component, OnInit } from '@angular/core';
import { BOOKS } from './data/mock-books';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  bookList: Book[] = [];
  pathImg: string = './assets/img/';

  //libro seleccionado
  selectedBook: Book;

  ngOnInit(): void {

    // cargamos los libros
    this.bookList = BOOKS;
  }

  setSelectedBook(aBook: Book): void {
    this.selectedBook = aBook;
  }

  deleteBook(isbn: number): void {
    this.selectedBook = null;
    this.bookList = this.bookList.filter( book => book.isbn !== isbn);
  }

  receiveBook(event): void {

    const myBook: Book = event;
    this.deleteBook( myBook.isbn );
  }

}
