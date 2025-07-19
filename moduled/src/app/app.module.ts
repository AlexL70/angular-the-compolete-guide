import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App} from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';

@NgModule({
    declarations: [App, Header, User, Tasks],
    bootstrap: [App],
    imports: [],
    providers: [BrowserModule],
})
export class AppModule {
}