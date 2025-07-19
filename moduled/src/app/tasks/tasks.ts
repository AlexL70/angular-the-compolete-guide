import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
