import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../types/TaskType';
import { UseAuthentication } from './AuthorizationContext';

export const SingleView = () => {
    const authentication = UseAuthentication();
    const userData = authentication?.authData;

    const [task, setTask] = useState<any>({});
    const { id } = useParams();

    useEffect(() => {
        const getTaskInfo = async () => {
            try {
                const response = await fetch(`/tasks/${id}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                } else {
                    const data = response.json();
                    setTask(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getTaskInfo();
    }, []);

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
