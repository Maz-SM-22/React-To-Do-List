import React, { useState } from 'react'
import { Task } from '../types/TaskType';
import { Types } from 'mongoose';

type taskFormProps = {
    task: Task | null
}

export const TaskForm = ({ task }: taskFormProps) => {
    const [taskId, settaskId] = useState<Types.ObjectId | null>(null);
    const [method, setMethod] = useState<'POST' | 'PUT'>('POST');
    const [url, setUrl] = useState<string>('/tasks');

    if (task) {
        settaskId(task.id);
        setMethod('PUT');
        setUrl(`/tasks/${taskId}?_method=${method}`);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Some logic to make a request to the url 
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <div className="task-form-container">
                {task ? (<h4>Edit Task</h4>) : (<h4>Create Task</h4>)}
                <form onSubmit={handleSubmit}>
                    <div className="task-form-item">
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div className="task-form-item">
                        <input type="text" name="title" value={task ? task.title : ''} />
                    </div>
                    <div className="task-form-item">
                        <label htmlFor="description">Description:</label>
                    </div>
                    <div className="task-form-item">
                        <textarea name="description" id="description">{task ? task.description : ''}</textarea>
                    </div>
                    <div className="task-form-item">
                        <label htmlFor="dueDate">When is your task due:</label>
                    </div>
                    <div className="task-form-item">

                        <input type="date" name="dueDate" value={task ? task.dueDate : ''} />

                    </div>
                    <button type="submit">{task ? 'Add' : 'Update'} Task</button>
                </form>
            </div>
        </div >
    )
}
