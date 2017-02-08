import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NTI5NzMsIm5iZiI6MTQ4NjU0OTM3MywiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzMxYWY0ZmItNzI5My00MzMwLWJmMTQtMDJlNDdjMTNmNjI5IiwiYXV0aF90aW1lIjoxNDg2NTQzODY4LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNDUxNzdAZmhpY3QubmwiLCJuYW1lIjoiSm9uZyxUaGlqcyBULlAuVy4gZGUiLCJlbWFpbCI6InRoaWpzLmRlam9uZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfFMyMVQgLyBTTTMyIiwiZm9udHlzX3VwbiI6IjM0NTE3N0BzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.PVFEaq91kx9iT52AnCGy_YsRHZDlCcROcBaNOIb-RZqPWntm-Z_k_zwhnX387xNid5B5LJ9_bnylUSvctd_skydbIwXblDAVMGvpZY1ARl1snfKtf99enHGi65YJiSCvW-uiKoUm5_osAENuzIKapWtq4Hj9c8nXfkjEDRDH5PgPT77yE1G0-W4lK93ghaQTc2G3h8brDXo9qr3tSeBOxfzVei0b2MMfZUeF5sI0q5Zm_EKx3HRRoTHk2A05Dl9H_6aIv4iIHEL87NfJzy1QGxxE8KaDaUCWkR7Z62g4J5Ds3_dRHPUzXNDYkQJGzuKEYGnX9_B8w7UW2b_IoQ59DA';

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