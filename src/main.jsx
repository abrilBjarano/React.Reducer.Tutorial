import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './TodoApp';
import { TodoProvider } from './context/TodoProvider';

// import './intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <TodoProvider>
    <TodoApp />
  </TodoProvider>
  // </React.StrictMode>,
)
