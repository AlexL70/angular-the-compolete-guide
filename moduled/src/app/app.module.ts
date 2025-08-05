import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App} from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [App, Header, User],
    bootstrap: [App],
    imports: [BrowserModule, CommonModule, FormsModule, SharedModule, TasksModule],
    providers: [],
})
export class AppModule {
}