import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Post } from './post';

@Injectable()
export class PostService {

  private productsServiceURI: string = 'http://localhost:4000';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
   let url = `${this.productsServiceURI}/list`;

      return this.http.get<Product[]>(url);
 }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
   let url = `${this.productsServiceURI}/search`;

      return this.http.post(url, `index=${index}`,
                    {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
 }
}
