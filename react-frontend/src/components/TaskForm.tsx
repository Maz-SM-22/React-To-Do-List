import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task } from '../types/TaskType';

type taskFormProps = {
    task: Task | undefined
}

export const TaskForm = ({ task }: taskFormProps) => {
    const navigate = useNavigate();
    let taskInfo: Task = {
        _id: undefined,
        title: undefined,
        description: undefined,
        completed: undefined,
        dueDate: undefined
    };
    const [method, setMethod] = useState<'POST' | 'PUT'>('POST');
    const [url, setUrl] = useState<string>('/tasks');

    useEffect(() => {
        if (task) {
            taskInfo = task;
            setUrl(`/tasks/${taskInfo._id}`);
            setMethod('PUT');
        }
    }, [task])

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(taskInfo)
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                const data = await response.json();
                alert(data?.message);
                return navigate('/tasks');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <div className="task-form-container">
                {task ? (<h4>Edit Task</h4>) : (<h4>Create Task</h4>)}
                <form>
                    <div className="task-form-item">
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div className="task-form-item">
                        <input
                            type="text"
                            name="title"
                            defaultValue={taskInfo.title}
                            onChange={(e) => taskInfo.title = e.target.value}
                        />
                    </div>
                    <div className="task-form-item">
                        <label htmlFor="description">Description:</label>
                    </div>
                    <div className="task-form-item">
                        <textarea
                            name="description"
                            id="description"
                            defaultValue={taskInfo.description}
                            onChange={(e) => taskInfo.description = e.target.value}
                        ></textarea>
                    </div>
                    <div className="task-form-item">
                        <label htmlFor="dueDate">When is your task due:</label>
                    </div>
                    <div className="task-form-item">
                        <input
                            type="date"
                            name="dueDate"
                            defaultValue={taskInfo.dueDate}
                            onChange={(e) => taskInfo.dueDate = e.target.value}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>{task ? 'Update' : 'Add'} Task</button>
                </form>
            </div>
        </div >
    )
}
