import { NewTaskEntity, TaskEntity } from "./task/task.model";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: TaskEntity[] = [
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
            summary: 'Prepare and describe an issue template which will help with project management',
            dueDate: new Date('2027-06-15T00:00:00'),
        },
    ];

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string): TaskEntity[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTask: NewTaskEntity, userId: string): TaskEntity {
        const task: TaskEntity = {
            ...newTask,
            id: Math.random().toString(),
            userId: userId
        };
        this.tasks.push(task);
        this.saveTasksToLocalStorage();
        return task;
    }

    removeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasksToLocalStorage();
    }

    private saveTasksToLocalStorage(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}