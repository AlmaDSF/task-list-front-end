import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

// const App = () => {
const App = () => {
  const initialCopy = TASKS.map((task) => {
    return { ...task };
  });

  const [taskList, SetTaskList] = useState(initialCopy);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList taskList={taskList} />}</div>
        {/* <div>{<TaskList tasks={TASKS} />}</div> */}
      </main>
    </div>
  );
};

export default App;
