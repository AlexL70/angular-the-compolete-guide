import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskEntity } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss'
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService);

  onCancelAddTask() {
    this.close.emit();
  }
  onCreateTask() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: new Date(this.enteredDueDate)
    } as NewTaskEntity;
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();
  }
}
