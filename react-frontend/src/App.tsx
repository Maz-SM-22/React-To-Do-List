import React from 'react';
import './App.css';
import { ErrorPage } from './components/ErrorPage';
import { Homepage } from './components/Homepage';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { SingleView } from './components/SingleView';
import { TaskDeleted } from './components/TaskDeleted';
import { TaskForm } from './components/TaskForm';
import { Tasks } from './components/Tasks';
import { Task } from './types/TaskType';


const App = () => {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App; 