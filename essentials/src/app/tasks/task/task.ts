import { Component, Input } from '@angular/core';

interface TaskEntity {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: Date;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({ required: true }) task!: TaskEntity;
}
