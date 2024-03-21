import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

private baseUrl='http://localhost:3000/blog'
  constructor(private http:HttpClient) { }

  getAllBlogs() {
    return this.http.get<any[]>(this.baseUrl);
  }


  // createBlog(blogData: any){
  //   return this.http.post<any>(this.baseUrl, blogData);
  // }
  // getBlog(blogId: number) {
  //   return this.http.get<any>(`${this.baseUrl}/${blogId}`);
  // }

  // updateBlog(blogId: number, blogData: any){
  //   return this.http.put<any>(`${this.baseUrl}/${blogId}`, blogData);
  // }

  // deleteBlog(blogId: number) {
  //   return this.http.delete<any>(`${this.baseUrl}/${blogId}`);
  // }
}
