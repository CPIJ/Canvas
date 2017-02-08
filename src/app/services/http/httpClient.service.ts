import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NTEzNjYsIm5iZiI6MTQ4NjU0Nzc2NiwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGE1NDcxMDgtNWM1OC00ODQ2LThlNzktOWM4ZTk2ZWU5ZTc3IiwiYXV0aF90aW1lIjoxNDg2NTQ3NzY1LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc3MDJAZmhpY3QubmwiLCJuYW1lIjoiV2Vya21hbixOaWVscyBOLiIsImVtYWlsIjoibi53ZXJrbWFuQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8R0Q0MiAvIFM0MlQiLCJmb250eXNfdXBuIjoiMzU3NzAyQHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.XfFojeLRMFw_4v9nsYLPIwP64embiG4kLsBiY8gBANQzD-Ec76k-R2EY3LRqXePA_-cXd_ER9aS20_fT86vEfomIvfvDarbKTDCEWc6sxIgOSL0QyEUl7sqP7LdMjUNzMS9jqj3YgRr6dJkF-DcE3jFzUyRqVrzNm8K4GJo453uUCDturku9jRcuGK6sRbqE8T7yaQMJ6RCq02LmYz7u9Om7UnDj7L2Hmv8loki-PuNk9cocFV05hPDgCI1OESTJVPfrTkb4wwhTcG9KGNeJKgEaqaUprbnVvaDlxlrgsMygs1IIA6zzzZlfd_PSDrHrdN-KZGSxABc_GAM9Gxf3vQ';


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