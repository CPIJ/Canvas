import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY0ODE0MjQsIm5iZiI6MTQ4NjQ3NzgyNCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGE1NDcxMDgtNWM1OC00ODQ2LThlNzktOWM4ZTk2ZWU5ZTc3IiwiYXV0aF90aW1lIjoxNDg2NDc1NzEwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc3MDJAZmhpY3QubmwiLCJuYW1lIjoiV2Vya21hbixOaWVscyBOLiIsImVtYWlsIjoibi53ZXJrbWFuQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8R0Q0MiAvIFM0MlQiLCJmb250eXNfdXBuIjoiMzU3NzAyQHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.cW52CoeuTBvlP6NDHIqel2NrUWwcHfpajg5bXUhrn-sANUUqjsOuzM3wNT4WDk_hFHeTTLhz-gKgSKCZIq-yOTtxd-rN0I4QE1H6YqvIZPm1lZvSmN9BVHGPKU73YFL9l3XHaNRXMHOjszSG6ndMhUBhG2yvcn1E60hR0xrzAts8qqJAbNBTB_qbpx3bx5t4T9dIQ6r0OiK8aud59EwmHbsj-F1FAs8_QzHEBUEQNxIkTVWwz-pOd0XwFKSjO8AbhB0E-4t2D6k6EYpcFw5twQMss7QONhau47HpUrM6jnDgi863bNZTEX3pJ9gj_-iO9SiiAf1UTcxQpjfSfv1C9g'

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