import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {

    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NjEyNzMsIm5iZiI6MTQ4NjU1NzY3MywiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzMxYWY0ZmItNzI5My00MzMwLWJmMTQtMDJlNDdjMTNmNjI5IiwiYXV0aF90aW1lIjoxNDg2NTU2OTAwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNDUxNzdAZmhpY3QubmwiLCJuYW1lIjoiSm9uZyxUaGlqcyBULlAuVy4gZGUiLCJlbWFpbCI6InRoaWpzLmRlam9uZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfFMyMVQgLyBTTTMyIiwiZm9udHlzX3VwbiI6IjM0NTE3N0BzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.XQUViMbozGRhThq6lMDYi2WtcHq_iwaxRsmWcS4yuzRZqbY6BKhmlCAx2VRwCowsrEfP7mIR8FC7f8Np775eXOk-dfFT9jHVwWEhe6nFLx4U6xNgup99YtG32-OiNauOAZ_poGWELPSIAhSUKQACA_oi-FtQqRhHlN2u57kjfEcbI1wjYOAxWhGvoUCqr3W-8yNuvOoM6ybxf2RFAlN5yqzeIIHfhlqTJkbP8BixGWYZSKHGTT4fMuj9AnKK7ZX8Ua3y-OIL4qTetiVhi9--SgKyq9BrI6ad-X46LRUZaDW2O9LMeX16gkPmWRBZ2xIw1vrAWv1crwWJjCfjBG-FOA'


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