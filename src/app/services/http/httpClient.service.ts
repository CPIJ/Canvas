import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {

    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NTY3MDUsIm5iZiI6MTQ4NjU1MzEwNSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTJlMGNhN2MtZDMxYi00NjUzLWFkZDktOWIyOWJlYzBiMjk5IiwiYXV0aF90aW1lIjoxNDg2NTUzMTA0LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc2MjlAZmhpY3QubmwiLCJuYW1lIjoiUGlqbmVuYnVyZyxDYXNwZXIgQy5BLlAuIiwiZW1haWwiOiJjYXNwZXIucGlqbmVuYnVyZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfE9JNDEgLyBTNDJUIiwiZm9udHlzX3VwbiI6IjM1NzYyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.QREbBqVaUp0ESmr6aXLj4PI0ymUwfol71FhuwKrSucwf1H2l3Kfnm0UZRPqDefqaynex-X3qK3KEeq2FAw4FHxxo6HCszUc6ELeNIVjseiyoZ0suoLcdgJXpSkGcO5AIRCY6zCIz3FYeIs_1r8l1iS0Wy4ajiWsawGsdoVd7h_uDYWUFKuAmxcRzR4sW8Ag86PpEBt0bA4WoparGZHdWvgNTFArU2x_hsdv42BZ-Da5gW25SnDQmQNdQS8rRGjU_eItA-kBSJItQQboRl6u3ztHgt7ihkJ1fEHzPCR6AShh8Ogfua4gHTQeLMnKxcLiOquw5DLbzY6Kz5b4GMjPEPA'


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