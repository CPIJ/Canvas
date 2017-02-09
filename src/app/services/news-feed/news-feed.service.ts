import { Injectable } from '@angular/core';
import { HttpClient } from '../../services/http/httpClient.service'  
import {Post} from '../../components/news-feed/Post'
@Injectable()
export class NewsFeedService {

  constructor(private http:HttpClient) { }

  getPosts(){ 
    return this.http.get('https://api.fhict.nl/newsfeeds/Fhict/posts')
      .map(res=> <Post[]>res.json())
  } 

}
