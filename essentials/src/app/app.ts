import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { Tasks } from './tasks/tasks';
import { NewTask } from './tasks/new-task/new-task';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks, NewTask],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Angular Essentials';
  protected addingNewTask = false;
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onAddNewTask() {
    if (this.selectedUserId) {
      this.addingNewTask = true;
    }
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.addingNewTask = false;
  }
}
