import { Component } from '@angular/core'

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
})

export class Header {

    leftLinks = [];
    rightLinks = [];
    
    constructor() {
        this.leftLinks = ['Dashboard', 'Rooster', 'Courses', 'Cijfers']
        this.rightLinks = ['Inbox', 'Account', 'Uitloggen']
    }
} 