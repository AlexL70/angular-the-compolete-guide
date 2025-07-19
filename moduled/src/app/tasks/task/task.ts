import { Component, Input } from '@angular/core';
import { TaskEntity } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({ required: true }) task!: TaskEntity;

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
