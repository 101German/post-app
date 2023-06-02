import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "src/app/models/Post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private url: string = "https://localhost:7198/Post";;
  constructor(private httpClient: HttpClient) {}

  getPosts(){
    return this.httpClient.get<Post[]>(this.url);
  }
}
