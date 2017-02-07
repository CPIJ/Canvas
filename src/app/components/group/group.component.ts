import { Component } from '@angular/core';
import { GroupService } from '../../services/groups/groups.service'

@Component({
    selector: 'groups',
    templateUrl: 'group.component.html',
    styleUrls: ['group.component.css']
})

export class Group{
    members: Member[];

    id: number;
    url: string;
    groupName: string;
    groupType: string;
    role: string;

    constructor (values: Object = {}, private groupService: GroupService) {
        Object.assign(this, values), groupService.getGroups().subscribe(r => this.members = r);
    }
}

export interface Member{
    id: number;
    givenName: string;
    surname: string;
    displayName: string;
    mail: string;
    employeeId: string;
    photoUri: string;
}