export interface NewTaskEntity {
    title: string;
    summary: string;
    dueDate: Date;
}
export interface TaskEntity extends NewTaskEntity {
    id: string;
    userId: string;
}

