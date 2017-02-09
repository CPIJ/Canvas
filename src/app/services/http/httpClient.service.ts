import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NzkyOTUsIm5iZiI6MTQ4NjU3NTY5NSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzhjNTE5MGEtNzIwMi00OGI3LWI5YmEtZjQxY2ZjMjFmOTE3IiwiYXV0aF90aW1lIjoxNDg2NTcxOTM0LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzMzk4MTRAZmhpY3QubmwiLCJuYW1lIjoiQ2FtcGVuaG91dCxDb2VuIEMuIHZhbiIsImVtYWlsIjoiYy52YW5jYW1wZW5ob3V0QHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8UzQyVCAvIFNNMzEiLCJmb250eXNfdXBuIjoiMzM5ODE0QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.HNnaopKDNqRbtm-_xRyq1DThXCpC0LcUCCWf3QF_7gPqaQXTflR3eas1x2LWxe13PJscebIwX17JUCy7grc05uk9LNeD3e-uMGE3SdMglBBo7Ep6eBnXnytIQHRGuEfgiYhdgao-Jl7A-L3Ei6798yMf0nIiF3OnIym5H7WKLW00H-kts4SmAx9bo2qRW_4T2gK82N6P9HgVYGG6hS3niRE4mNdMD_vAZPL9fQv7By_1KU460ps6l5ZMeLWWwjSdkgGzkModOfhJzFle5KUpLN2eY5w9Ds5_lX6x9iTt_Y-1yIt_E2L275cvMB8huQ2h42nZYFHtjZICFLCL66j7hg';

    constructor(private http: Http) {

    }

    authorize(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + this.token)
    }

    get(url) {
        let headers = new Headers();    
        this.authorize(headers);
        return this.http.get(url, {
            headers: headers
        });
    }
}