import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
    
    static token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY3MjQ5OTYsIm5iZiI6MTQ4NjcyMTM5NiwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTJlMGNhN2MtZDMxYi00NjUzLWFkZDktOWIyOWJlYzBiMjk5IiwiYXV0aF90aW1lIjoxNDg2NzIxMzk2LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc2MjlAZmhpY3QubmwiLCJuYW1lIjoiUGlqbmVuYnVyZyxDYXNwZXIgQy5BLlAuIiwiZW1haWwiOiJjYXNwZXIucGlqbmVuYnVyZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfE9JNDEgLyBTNDJUIiwiZm9udHlzX3VwbiI6IjM1NzYyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.XFg-9dDNrrGqgz8jisw_dq5MlvWflOjZJq229tr49z1CLWsuq6WlHVSLX0gijPV1FkMS8igMl8LEU_VaWHk4p0BghyvotuNETem7FnU1BWeGmHPb2pKfcDoegliQFdLfp0EBTs4pDgHV7vsytJl158oC1Yq1fCpB7Vo29cWFnoBBoVkdcT5xXyiA_XyBnrjcfeCV9CZEdA-Fw5AcUvWkGIj_ue48EK7lF8e52AqxfuYsGYsIB2Hg5TKDx9PGYufqzfzyDCOcbtUQ9JRAOYCWkhaVEvN4Slm9vH01GaSpdMQSukeRznGkm771MyAklOgs1W0VggLTmHzlrAJqwlzl1g';

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