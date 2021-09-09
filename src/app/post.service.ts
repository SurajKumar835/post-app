import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { 
    console.log("http request");
  }
  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map(res =>res));

  }
}
