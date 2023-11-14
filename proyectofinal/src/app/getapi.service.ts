import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  posts = [] as any;

  constructor(private http:HttpClient) { }

  readPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  readPost(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  
  readComments(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
  }
}

