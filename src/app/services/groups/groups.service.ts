import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { GroupComponent, Member } from '../../components/group/group.component'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HttpClient } from '../../services/http/httpClient.service' 

@Injectable()


export class GroupService {

    constructor(private http: HttpClient) {

    }

    getGroups()  {
        return this.http.get('https://api.fhict.nl/groups')
            .map(res => <Member[]>res.json())
    }
}