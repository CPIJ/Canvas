import { Component } from '@angular/core';
import { GroupService } from '../../services/groups/groups.service'

@Component({
    selector: 'groups',
    templateUrl: 'group.component.html',
    styleUrls: ['group.component.css']
})

export class GroupComponent{
    members: Member[];

    id: number;
    url: string;
    groupName: string;
    groupType: string;
    role: string;

    constructor (private groupService: GroupService) {
        groupService.getGroups().subscribe(r => this.members = r);
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