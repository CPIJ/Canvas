import { Component } from '@angular/core'

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {

    leftLinks: Link[];
    rightLinks: Link[];
    
    constructor() {
        // Init
        this.leftLinks = [];
        this.rightLinks = [];

        // Knoppen aan de linkerkant.
        this.leftLinks.push(new Link('/calendar', 'Rooster'));
        this.leftLinks.push(new Link('/courses', 'Courses'));
        this.leftLinks.push(new Link('/grades', 'Cijfers'));
        this.leftLinks.push(new Link('/groups', 'Groepen'));

        // Knoppen aan de rechterkant.
        this.rightLinks.push(new Link('/inbox', 'Inbox'));
        this.rightLinks.push(new Link('/account', 'Inbox'));
        this.rightLinks.push(new Link('/logout', 'Uitloggen'));
    }
}

class Link {
    routerLink: string;
    name: string

    constructor(rl, name){
        this.routerLink = rl;
        this.name = name;
    }
} 