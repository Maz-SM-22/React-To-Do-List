import React from 'react'
import { Task } from '../types/TaskType';

type TaskProps = {
    task: Task
}

export const TaskDeleted = ({ task }: TaskProps) => {
    return (
        <div>
            <h1>Task Successfully deleted task: {task.title}</h1>
            <a href="#" id="return-btn">Return to home page</a>
        </div>
    )
}
