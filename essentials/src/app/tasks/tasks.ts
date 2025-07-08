import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  @Input({required: true}) userName!: string;
  @Input({ required: true }) userId!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Complete Angular Essentials Course',
      summary: 'Finish the course and apply the knowledge in a project.',
      dueDate: new Date('2025-08-01T10:00:00'),
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: new Date('2026-05-31T00:00:00'),
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: new Date('2027-06-15T00:00:00'),
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
