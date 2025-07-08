import { Component, Input, Output, EventEmitter, output } from '@angular/core';

interface UserEntity {id: string; avatar: string; name: string };

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({ required: true }) user!: UserEntity;
  //select = output<string>();
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
