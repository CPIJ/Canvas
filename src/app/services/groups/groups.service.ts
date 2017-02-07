import { Component } from '@angular/core'
import { Injectable } from '@angular/core'

import { Group, Member } from '../../components/group/group.component'

@Injectable()

export class GroupService{
    getGroups() : Member[] {
        
        let members = [];

        for (let i = 0; i < 7; i++){
            members.push({
                id: 1,
                givenName: 'Bas',
                surname: 'van Wijk',
                displayName: 'bvwijk',
                mail: 'bas.vanwijk@student.fontys.nl',
                employeeId: 1,
                photoUri: 'string'
                
            })
        }
        return members;

    }
}