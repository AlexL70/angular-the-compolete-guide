import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false, // is set to true by default in Angular 19 or higher
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header { }