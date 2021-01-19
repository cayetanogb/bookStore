import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  // info del libro
  @Input() book: Book; // parametro input

  // propiedad Output
  @Output() delete = new EventEmitter<Book>(null);


  pathImg: string = './assets/img/';

  constructor() { }

  ngOnInit(): void {
  }

  sendBookToDelete(): void {
    
    // envio el libro a borrar
    this.delete.emit(this.book);
  }

}
