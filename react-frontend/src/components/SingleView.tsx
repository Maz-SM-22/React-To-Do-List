import React from 'react'
import { Task } from '../types/TaskType';
import { UseAuthentication } from './AuthorizationContext';

type TaskProps = {
    task: Task | undefined
}

export const SingleView = ({ task }: TaskProps) => {
    const authentication = UseAuthentication();
    const userData = authentication?.authData;
    return (
        <div>
            {task && (
                <>
                    <h1>Task</h1>
                    <div className="single-task-container">
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <p>{task.dueDate.toDateString()}</p>
                        <a href="#" className="button">Edit</a>
                        <a href="#" className="button">Delete</a>
                        <a href="#" className="button">Mark Complete</a>
                    </div>
                </>
            )}
        </div>
    )
}
