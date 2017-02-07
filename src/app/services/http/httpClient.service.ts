import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY0NzI4OTMsIm5iZiI6MTQ4NjQ2OTI5MywiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTJlMGNhN2MtZDMxYi00NjUzLWFkZDktOWIyOWJlYzBiMjk5IiwiYXV0aF90aW1lIjoxNDg2NDY5MjkyLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc2MjlAZmhpY3QubmwiLCJuYW1lIjoiUGlqbmVuYnVyZyxDYXNwZXIgQy5BLlAuIiwiZW1haWwiOiJjYXNwZXIucGlqbmVuYnVyZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfE9JNDEgLyBTNDJUIiwiZm9udHlzX3VwbiI6IjM1NzYyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.LnfVN57JeIuAZibSpHO2-Sgn4YXPpBfCG7EQLSu9rt-EK1qo7f53wd1D68qgbnDOukunbRX-cHUACFPslzVLy1adQB2G1ZAcagTmpfVd4x5Dzpk_e73rkbZwosWa6CY1s9Ydrs_IWOTBAQC3pNsr8KKhkI0gzveqjXhfkOkJUziZuNJkw2w-3DwMgwkYJaSn8cjfTW8Ez7EOhHZNGPuDsEgx5TUVuCCm4Hbln_saatDi-aPohIg-pbqFT__kx8yQ-29M_mfyNg98n-1tQBMhH7cMrQeVpL4UB7YDXeHXRglR1mjnHRMIegWjJ7Ya0o29_vMBYlEPRFec2tMBSC5kAA'

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