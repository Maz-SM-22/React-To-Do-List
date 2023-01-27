import React from 'react'
import { Task } from '../types/TaskType';

type TaskProps = {
    task: Task
}

export const SingleView = ({ task }: TaskProps) => {
    return (
        <div>
            <h1>Task</h1>
            <div className="single-task-container">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.dueDate.toDateString()}</p>
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
                <a href="#" className="button">Mark Complete</a>
            </div>
        </div>
    )
}
