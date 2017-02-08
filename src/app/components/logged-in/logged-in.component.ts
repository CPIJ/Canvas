import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '../../../app/services/http/httpClient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { 

     this.route.fragment.subscribe((fragment: string) => {
        if (fragment == undefined || fragment == "")
            return;
        let parameters = fragment.split('&');

        for (let para of parameters) {
            if (para.startsWith("access_token=")) {
                HttpClient.token = para.substring(para.indexOf('=') +1);
            }
            else if (para.startsWith("status=")) {
                this.router.url = para.substring(para.indexOf('=') +1);
            }
        }
     })
   }
  
  ngOnInit() {
  }

}
