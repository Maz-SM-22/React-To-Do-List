import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthorizationContext } from './components/AuthorizationContext';
import { RequireAuth } from './components/RequireAuth';

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
            <Route path='/tasks' element={<RequireAuth><Tasks /></RequireAuth>} />
            <Route path='/tasks/:id' element={<RequireAuth><SingleView task={undefined} /></RequireAuth>} />
            <Route path='/tasks/create' element={<RequireAuth><TaskForm task={undefined} /></RequireAuth>} />
            <Route path='/tasks/edit/:id' element={<RequireAuth><TaskForm task={undefined} /></RequireAuth>} />
            <Route path='/tasks/deleted/:id' element={<RequireAuth><TaskDeleted task={undefined} /></RequireAuth>} />
            <Route path='*' element={<ErrorPage error={undefined} />} />
          </Routes>
        </Router>
      </AuthorizationContext>
    </div>
  );
}

export default App; 