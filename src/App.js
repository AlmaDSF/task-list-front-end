import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

// const App = () => {
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const URL='https://task-list-api-c17.herokuapp.com/tasks';

  // const initialCopy = TASKS.map((task) => {
  //   return { ...task };
  // });

  useEffect(() => {
    axios.get(URL)
    .then((response)=> {
      const taskAPIRespCopy = response.data.map((task)=> {
        return{
          'id':task.id,
          'title':task.title,
          'isComplete':task.is_complete
        };
      });
      setTaskList(taskAPIRespCopy);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const deleteTask = (taskId) => {
    console.log('deleteTask Called');
    
    axios.delete(`${URL}/${taskId}`)
    .then(()=> {
      const newTaskList = [];
      for (const task of taskList) {
        if (task.id !== taskId) {
          newTaskList.push(task);
        }
      }
      setTaskList(newTaskList);
      })      
    .catch((err)=>{
      console.log(err);
    });
  };
  
  const updateComplete = (taskId, taskIsComplete) => {
    console.log('updateComplete called');
    let marktask='';
    if (taskIsComplete === true) {
      marktask = 'mark_complete';
    } else if (taskIsComplete === false) {
      marktask = 'mark_incomplete';
    }
    axios.patch(`${URL}/${taskId}/${marktask}`)
    .then(()=> {
      const newTaskList = [];
      for (const task of taskList) {
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
      setTaskList(newTaskList);
    })
    .catch((err)=> {
      console.log(err);
    });
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
        <div>
          <NewTaskForm />
        </div>

        {/* <div>{<TaskList tasks={TASKS} />}</div> */}
      </main>
    </div>
  );
};

export default App;
