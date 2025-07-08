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
}
