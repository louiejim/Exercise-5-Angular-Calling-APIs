import { Injectable } from '@angular/core';
import { Book } from '../model/book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {

 private baseUrl='http://localhost:3000/books'

  constructor(private http:HttpClient) {}

getAllBooks(){
  return this.http.get<any[]>(this.baseUrl)
}
}
