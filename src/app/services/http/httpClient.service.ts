import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {

    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY2MzkzMzksIm5iZiI6MTQ4NjYzNTczOSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGE1NDcxMDgtNWM1OC00ODQ2LThlNzktOWM4ZTk2ZWU5ZTc3IiwiYXV0aF90aW1lIjoxNDg2NjMyOTc1LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc3MDJAZmhpY3QubmwiLCJuYW1lIjoiV2Vya21hbixOaWVscyBOLiIsImVtYWlsIjoibi53ZXJrbWFuQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8R0Q0MiAvIFM0MlQiLCJmb250eXNfdXBuIjoiMzU3NzAyQHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.FBwr23-77Xvt5rPm59PmXS8ZaRkSB4nQeD8-YGNT9MOuSdxXblwThh8jq3GcMxR2Fdxt1AkmVnfwguNYdhpLUxlSAwUbdz08CWvH-wDfho1OP18UWz5fZSg7JJiaAYuesi5ib9xnWxBGvFkC-MjfJP1nZrRoXyiUZIRPATxCCiCi01PmH2bjg1Cv2BHmCieBIqPgm-BdLZyJcTc2QnPWLdO5qNU_Lk2HBWJ_-2o4X4NO6KyYi_kJGJquMZbHSBzUa5Cs3BR0mlFoA0UDCC_0LLh6HGjY6wY_ZQF5yLgFyNSShWtjLPjFVJucf139pysK7fANPAabYaCha-hMwgeayg'


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