import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App} from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [App, Header, User, Tasks, Task, NewTask],
    bootstrap: [App],
    imports: [BrowserModule, CommonModule, FormsModule, SharedModule],
    providers: [],
})
export class AppModule {
}