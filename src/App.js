import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

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
  const updateComplete = (taskId, taskIsComplete) => {
    console.log('updatePrice called');

    const newTaskList = [];
    for (const task of TaskList) {
      if (task.id !== taskId) {
        newTaskList.push(task);
      } else {
        const newTask = {
          ...task,
          isComplete: taskIsComplete,
        };
        newTaskList.push(newTask);
      }
    }
    SetTaskList(newTaskList);
  };

  const deleteTask = (taskId) => {
    console.log('deleteTask Called');

    const newTaskList = [];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTaskList.push(task);
      }
    }
    SetTaskList(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              taskList={taskList}
              deleteTask={deleteTask}
              updateComplete={updateComplete}
            />
          }
        </div>
        {/* <div>{<TaskList tasks={TASKS} />}</div> */}
      </main>
    </div>
  );
};

export default App;
