import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { UserEntity } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({ required: true }) user!: UserEntity;
  @Input({ required: true }) selected: boolean = false;
  //select = output<string>();
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
