import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthorizationContext } from './components/AuthorizationContext';
// import { RequireAuth } from './components/RequireAuth';

import { ErrorPage } from './components/ErrorPage';
import { Homepage } from './components/Homepage';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { SingleView } from './components/SingleView';
import { TaskDeleted } from './components/TaskDeleted';
import { TaskForm } from './components/TaskForm';
import { Tasks } from './components/Tasks';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <AuthorizationContext>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/tasks/:id' element={<SingleView />} />
            <Route path='/tasks/create' element={<TaskForm task={undefined} />} />
            <Route path='/tasks/edit/:id' element={<TaskForm task={undefined} />} />
            <Route path='/tasks/deleted/:id' element={<TaskDeleted task={undefined} />} />
            <Route path='*' element={<ErrorPage error={undefined} />} />
          </Routes>
        </Router>
      </AuthorizationContext>
    </div >
  );
}

export default App; 