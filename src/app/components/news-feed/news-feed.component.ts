import { Component, OnInit } from '@angular/core';
import {Post} from '../news-feed/Post'; 
import {NewsFeedService} from '../../services/news-feed/news-feed.service';
@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  NewsFeed: Post[];
  constructor(private newsFeedService:NewsFeedService) {  
    this.newsFeedService.getPosts().subscribe(r=> this.NewsFeed  = r)
    this.newsFeedService.getPosts().subscribe(r=> console.log(r));  
   }
  
  ngOnInit(){}
 
}
