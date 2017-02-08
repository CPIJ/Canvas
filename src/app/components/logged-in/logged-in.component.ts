import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { HttpClient } from '../../../app/services/http/httpClient.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent{

  constructor(private route: ActivatedRoute, private router: Router) 
  { 
      // this.route.fragment.subscribe((fragment: string) => {
      //     if (fragment == undefined || fragment == "")
      //         return;
          
      //     let params = new URLSearchParams(fragment);
      //     HttpClient.token = params.get('access_token');
      //     let loc = params.get('status');

      //     if (loc != undefined)
      //       this.router.navigate([loc]);
      // });

      this.route
        .queryParams
        .subscribe(params => {
            HttpClient.token = params['#access_token'];
            let loc = params['status'];

           if (loc != undefined)
             this.router.navigate([loc]);
        });      
  }

}