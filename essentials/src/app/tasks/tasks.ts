import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "./task/task";
import { NewTask } from './new-task/new-task';
import { type NewTaskEntity, type TaskEntity } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  @Input({required: true}) userName!: string;
  @Input({ required: true }) userId!: string;
  protected isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
      this.isAddingTask = true;
  }
  onCloseAddTask() {
      this.isAddingTask = false;
  }
}
