import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
    
    static token: string = undefined;

    constructor(private http: Http) {

    }

    authorize(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + HttpClient.token)
    }

    get(url) {
        let headers = new Headers();    
        this.authorize(headers);
        return this.http.get(url, {
            headers: headers
        });
    }
}