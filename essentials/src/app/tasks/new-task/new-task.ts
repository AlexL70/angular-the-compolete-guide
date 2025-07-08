import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskEntity } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTaskEntity>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancelAddTask() {
    this.cancel.emit();
  }
  onCreateTask() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: new Date(this.enteredDueDate)
    } as NewTaskEntity;
    this.create.emit(newTask);
  }
}
