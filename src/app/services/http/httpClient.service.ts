import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {

    token: string = 
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY0Njg4MTQsIm5iZiI6MTQ4NjQ2NTIxNCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGE1NDcxMDgtNWM1OC00ODQ2LThlNzktOWM4ZTk2ZWU5ZTc3IiwiYXV0aF90aW1lIjoxNDg2NDY1MjEwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc3MDJAZmhpY3QubmwiLCJuYW1lIjoiV2Vya21hbixOaWVscyBOLiIsImVtYWlsIjoibi53ZXJrbWFuQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8R0Q0MiAvIFM0MlQiLCJmb250eXNfdXBuIjoiMzU3NzAyQHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.gr5oUERKk-a-dmI2Fi4jk4ECPCLfnKL_FSxrEJe__oRicYuoG1rz1xSl0wjxEBx9yuCjJ4LBua-5--Irx8EqyFeUtCFZUrwmRwAN8HIOmNU3GxmxVbczNhOVvss2wDJ2qMPfXMqRVEw7nngZN7SpRK0i1OEajsvzBKGjD7GUwz-7Ff39RZZjphM3t54Rvpt5l7AnE4_p3jYcmM7kC3l-FE9UqoPU3mman1mLjN9WxY0beNvqdFXG9AYGS_6pgau4w1WfQ4vBpF_EM-fCpVSv9vJCVtPBN3xkyPr6Q4scA1tORKVO6heSkT0P59HNndqjyUdfWc63EZ-Rxq0eG2dyDg'
    
    

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