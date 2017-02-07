import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthenticatedHttpService extends Http {

  clientid : string = '';
  
  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch((error: Response) => {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                window.location.href = 'https://identity.fhict.nl/connect/authorize?https://identity.fhict.nl/connect/authorize?client_id='+ this.clientid +'&scope=fhict%20fhict_schedule&response_type=token&redirect_uri=' + window.location.href;
            }
            return Observable.throw(error);
        });
  }
}
