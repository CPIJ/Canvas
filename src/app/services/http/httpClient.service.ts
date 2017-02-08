import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NDc2MTQsIm5iZiI6MTQ4NjU0NDAxNCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzhjNTE5MGEtNzIwMi00OGI3LWI5YmEtZjQxY2ZjMjFmOTE3IiwiYXV0aF90aW1lIjoxNDg2NTQ0MDE0LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzMzk4MTRAZmhpY3QubmwiLCJuYW1lIjoiQ2FtcGVuaG91dCxDb2VuIEMuIHZhbiIsImVtYWlsIjoiYy52YW5jYW1wZW5ob3V0QHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8UzQyVCAvIFNNMzEiLCJmb250eXNfdXBuIjoiMzM5ODE0QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.NsXV1nVAACbX-QNw0Ts4RiQeuomaQQcUrwAl645v5RP9mA5BwyhW15ZsbJnCM-IzyUyH7qFFebdxOjPBZFSf3syfGRWADP4PSaJOX_kfw0Vpvp2W-FulRb38q_zlJxqMHqkSFPzWnNF9fVzxf62Wa1qd_HZPMFriLfGfVPZv9Ovf8hTiNaSpM13_olkzAJjBDtb5pTJd1cTlt-RABgetQK-GnA3Wc911N9Esy4M1kqfZeYwAnsdFGbNkj6sJLhWqLgd9X1l-xRnnQqtm82HFwIv6hyDZ6k5ZVqBFDDUEfaZeLYGQKJDKQOgmLOKKnIn0DjJtrGHWGOCq6JA1j_p7IA';


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