import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {

    token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY0NjI1NzQsIm5iZiI6MTQ4NjQ1ODk3NCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTJlMGNhN2MtZDMxYi00NjUzLWFkZDktOWIyOWJlYzBiMjk5IiwiYXV0aF90aW1lIjoxNDg2NDU0OTU2LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc2MjlAZmhpY3QubmwiLCJuYW1lIjoiUGlqbmVuYnVyZyxDYXNwZXIgQy5BLlAuIiwiZW1haWwiOiJjYXNwZXIucGlqbmVuYnVyZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfE9JNDEgLyBTNDJUIiwiZm9udHlzX3VwbiI6IjM1NzYyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.Tk92rSuJOoUc1ERUF8Um58JdsCCehhuKM2vxx4trUkLZtV4XIi1qAxJg0vsorykXKTg38Wk-VJ0V9ri1bX_x_MDLeNx4w8u20CzqEjkcPX8QzHr95VwuR_EfN2BtCgJye_aXnsEzSQobI4-yf3ivj69ZuRkp6kAXgMlZjRjyA3z88ouMCpDL55DGgxbu9iZu461aHH9pmvb9xjpFHEYGAWXOX3dk4uEhPNEpOlU3NvTDJDaFw9xQPVDlInO142C18AMl5uqYI2pKyb6JGzH8jsW9DOmBO9poIoqz2j3WGf5SiF1ILzrv5s3ztiacO54ZakjJRb37qCmGbT7oDeNG6Q'

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