import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Task } from '../types/TaskType';
import { UseAuthentication } from './AuthorizationContext';

export const Tasks = () => {
    const authentication = UseAuthentication();
    const onLogout = authentication?.onLogout;
    const userData = authentication?.authData;

    const [tasks, setTasks] = useState<Array<Task> | []>([]);
    const [pendingTasks, setPendingTasks] = useState<Array<Task> | []>([]);
    const [completedTasks, setCompletedTasks] = useState<Array<Task> | []>([]);

    const getPendingTasks = () => { return tasks.filter(task => !task.completed) };
    const getCompletedTasks = () => { return tasks.filter(task => task.completed) };

    useEffect(() => {
        const getTasks = async () => {
            const response = await fetch('/tasks/${userData.id}');
            const data = await response.json()
            try {
                if (response.ok) {
                    setTasks(data.tasks);
                    setPendingTasks(getPendingTasks());
                    setCompletedTasks(getCompletedTasks());
                } else {
                    console.error(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getTasks();
    }, [])

    const logout = async () => {
        try {
            const response = await fetch('/user/logout', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                if (onLogout) onLogout();
                return <Navigate to='/' />
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>Hi, {userData.username}</li>
                    <li><a className="button" onClick={logout}>Logout</a></li>
                </ul>
            </nav>
            <div className="container">
                <h2>To-Do List</h2>
                <a href="/tasks/create" className="button">Add New Task</a>
                <h2>Pending Tasks</h2>
                <div className="tasks-container">
                    {(pendingTasks) ? (
                        <>
                            {
                                pendingTasks.map((task: Task) =>
                                    <div className="task" data-status={task.completed} data-id={task.id}>
                                        <p className="task-title">{task.title}</p>
                                        <p className="task-description">{task.description}</p>
                                        <p className="task-due-date">{String(task.dueDate).split(' ').slice(0, 4).join(' ')}</p>
                                        <button id="status" className="small">Complete</button>
                                        <button id="edit" className="small">Edit</button>
                                        <button id="delete" className="small">Delete</button>
                                    </div>
                                )
                            }
                        </>
                    ) : (<p>You have no pending tasks</p>)}
                </div>
                <h2>Completed Tasks</h2>
                <div className="tasks-container">
                    {(completedTasks) ? (
                        <>
                            {
                                completedTasks.map((task: Task) =>
                                    <div className="task" data-status={task.completed} data-id={task.id}>
                                        <p className="task-title">{task.title}</p>
                                        <p className="task-description">{task.description}</p>
                                        <p className="task-due-date">{String(task.dueDate).split(' ').slice(0, 4).join(' ')}</p>
                                        <button id="status" className="small">Complete</button>
                                        <button id="edit" className="small">Edit</button>
                                        <button id="delete" className="small">Delete</button>
                                    </div>
                                )
                            }
                        </>
                    ) : (<p>You have no completed tasks</p>)}
                </div>
            </div>
        </div>
    )
}
