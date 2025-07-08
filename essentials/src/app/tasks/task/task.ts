import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskEntity } from './task.model';
import { Card } from "../../shared/card/card";
@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({ required: true }) task!: TaskEntity;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
