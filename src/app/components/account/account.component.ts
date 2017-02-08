import { Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
    selector: 'account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css']
})

export class AccountComponent{

    id: string;
    url: string;
    givenName: string;
    surName: string;
    initials: string;
    displayName: string;
    mail: string;
    photo: string;
    department: string;
    title: string;
    personalTitle: string;
    affiliations: [
    string,
    string
    ];
    updatedAt: string;
    uid: string;
    employeeId: string;

    constructor (private accountService: AccountService){
        accountService.getAccount().subscribe(r => Object.assign(this,r));
    }
}