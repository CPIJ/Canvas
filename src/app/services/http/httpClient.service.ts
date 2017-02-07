import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY0NzYwNDIsIm5iZiI6MTQ4NjQ3MjQ0MiwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzhjNTE5MGEtNzIwMi00OGI3LWI5YmEtZjQxY2ZjMjFmOTE3IiwiYXV0aF90aW1lIjoxNDg2NDcwMTg5LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzMzk4MTRAZmhpY3QubmwiLCJuYW1lIjoiQ2FtcGVuaG91dCxDb2VuIEMuIHZhbiIsImVtYWlsIjoiYy52YW5jYW1wZW5ob3V0QHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8UzQyVCAvIFNNMzEiLCJmb250eXNfdXBuIjoiMzM5ODE0QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.VnOh2ZRbAliUyU0FUJni-rWUvssQtsoOJ50VIPDLNZe-yULXBpSn7ytrc04vVlgew5fJcB-Z7fUvJicDIN2BX2-81eNedjj4X1tDxYiL-EDQRgEJQkJq9v0LpghucviJmQ2rpalVRHbFMQLdgmf4LmS5IG4Ji49ZLaWi854RgDff9Zfl0ifcrjT8PhJhtUnp9A-92RdkH2u_QOrFSP69jkwt2BeT4-dGqdJAsx0fcB3Eu81Ar2DbjPLPtK_9UrlSPtPMy0thnhdh7ckKGJcbCMUb5feNaR4ueDbiBvOSnNnO79HFtyjGl7bRfvPLLwsd_KthAo7T8L12Roga3PIbsQ';


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