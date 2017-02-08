import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()

export class HttpClient {
    token: string = '                       eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSIsImtpZCI6ImdyQWk2cnJRU0JiVVItY01ZOHpRTHE2aGdVQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE0ODY1NDg0ODUsIm5iZiI6MTQ4NjU0NDg4NSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiZTJlMGNhN2MtZDMxYi00NjUzLWFkZDktOWIyOWJlYzBiMjk5IiwiYXV0aF90aW1lIjoxNDg2NTQwNTEwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6IkkzNTc2MjlAZmhpY3QubmwiLCJuYW1lIjoiUGlqbmVuYnVyZyxDYXNwZXIgQy5BLlAuIiwiZW1haWwiOiJjYXNwZXIucGlqbmVuYnVyZ0BzdHVkZW50LmZvbnR5cy5ubCIsInVybjpubC5maGljdDpzY2hlZHVsZSI6ImNsYXNzfE9JNDEgLyBTNDJUIiwiZm9udHlzX3VwbiI6IjM1NzYyOUBzdHVkZW50LmZvbnR5cy5ubCIsImFtciI6WyJleHRlcm5hbCJdfQ.KPlprJBp-o-nBz9Hkg0lQoEuZB-sx4GssZm2ZwDYyn4xinnaXaWRgqm8JI2HthGUOJZ8iBHJXTg-Yx-hZWrV3UzdDQErE12OeeoEZNJiwF4aJYzoCaaqojS6AAWWjfw5FnAOGICkxpezJM9xAFl-3qEE7BIyDtiSxh8IhYHgANzN2YhIGYJpVlL2QBx6Y7aQfXCy7-zfT1zBOdCuc3WbsxbgkeyOSAcpJXqzGNA1YOZWiB5229SaUwt4L3spntKPhjetxKC_cgkvQzRepSMyr20AMDBeMEC-zASURrLITFUGFyCtGXyVzTCaVLrWdoVQ60Au1HRT7-mdck5ZUEpfCg';


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