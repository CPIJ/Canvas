import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { AccountComponent } from '../../components/account/account.component'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient } from '../../services/http/httpClient.service' 

@Injectable()


export class AccountService {

    constructor(private http: HttpClient) {

    }

    getAccount()  {
        return this.http.get('https://api.fhict.nl/people/me')
            .map(res => <AccountComponent>res.json())
    }
}