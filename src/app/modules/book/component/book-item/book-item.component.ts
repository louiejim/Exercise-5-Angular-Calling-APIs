import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  @Input('childbook') book!: Book;
  @Output() editEmitter = new EventEmitter<number>();
  @Output() deleteEmitter = new EventEmitter<number>();
}
