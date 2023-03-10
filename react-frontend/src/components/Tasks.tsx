import React, { useState } from 'react'
import { Task } from '../types/TaskType';
import { User } from '../types/UserType';

type TasksProps = {
    user: User,
    tasks: Array<Task>
}

export const Tasks = ({ user, tasks }: TasksProps) => {
    const getPendingTasks = () => { return tasks.filter(task => !task.completed) };
    const getCompletedTasks = () => { return tasks.filter(task => task.completed) };

    const [pendingTasks, setPendingTasks] = useState(getPendingTasks());
    const [completedTasks, setCompletedTasks] = useState(getCompletedTasks());

    return (
        <div>
            <nav>
                <ul>
                    <li>Hi, {user.username}</li>
                    <li><a href="/user/logout" className="button">Logout</a></li>
                </ul>
            </nav>
            <div className="container">
                <h2>To-Do List</h2>
                <a href="/task/create" className="button">Add New Task</a>
                <h2>Pending Tasks</h2>
                <div className="tasks-container">
                    {(pendingTasks) ? (
                        <>
                            {
                                pendingTasks.map((task: Task) =>
                                    <div className="task" data-status={task.completed} data-id={task._id}>
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
                                    <div className="task" data-status={task.completed} data-id={task._id}>
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
