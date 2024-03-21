import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  //Display all the book items in the array in the Book List component coming from the book service
    book: Book[] = [];

  constructor(private bookService: BookService) {} //using dependency injection

  ngOnInit(): void {
 this.bookService.getAllBooks().subscribe(books=>{
  this.book=books
 })
  }

  delete(id:number){
    //logic to Delete
  }

  edit(id:number){
    //logic to edit
  }

  handleAction(actionType: string) {
   console.log(actionType)
  }
}
