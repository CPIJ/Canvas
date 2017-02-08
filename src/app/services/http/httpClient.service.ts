import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1MTUxNTgsIm5iZiI6MTQ4NjUxMTU1OCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzhjNTE5MGEtNzIwMi00OGI3LWI5YmEtZjQxY2ZjMjFmOTE3IiwiYXV0aF90aW1lIjoxNDg2NTExNTU2LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzMzk4MTRAZmhpY3QubmwiLCJuYW1lIjoiQ2FtcGVuaG91dCxDb2VuIEMuIHZhbiIsImVtYWlsIjoiYy52YW5jYW1wZW5ob3V0QHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8UzQyVCAvIFNNMzEiLCJmb250eXNfdXBuIjoiMzM5ODE0QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.IKhscW5eAUWQwZIu2kyH6eZTNlNUSDVNUS-B-GuWv9pM8D08Nm8C1e6PM8NniW7XvEnbECaB0BOik9msg2l4zOqqrX01OE84ZkjzBkrDI-9HlNxZeyLsHM1xN3sSetFJE5JBoo9vv8uYZABSs0FLNcdni_hLc4LdsJuoUFswYdLVQM2CsUC-imRiO2X4W3Kal1dseeyBhd3qnytMg7xy4qeNL2TXbzDZb-55hQJd452HsFG_GQgJ_ALHD68gk9XlhJ9bqeAxq3Qz8DeQu-5TAfZpfZDNxRHrTID-h4TBFmiX2nkMfOnYMKl2qxbvUFHLcBM9ztO0uBJDJ075OnWgPA';



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