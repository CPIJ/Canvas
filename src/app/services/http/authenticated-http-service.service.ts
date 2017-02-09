import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticatedHttpService extends Http {

  clientid : string = 'i357629-canvas2.0b';
  
  constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router:Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch((error: Response) => {
            if (error.status === 401 || error.status === 403) {
                window.location.href = 
                'https://identity.fhict.nl/connect/authorize?client_id='+ 
                      this.clientid + '&scope=fhict%20fhict_personal&response_type=token&redirect_uri=localhost:4200&state=' + this.router.url;
                      
            }
            return Observable.throw(error);
        });
  }
}
