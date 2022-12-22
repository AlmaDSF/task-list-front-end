# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    - They come from TaskList.
   
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
          - Instead of expecting 3 arguments, the function will need one argument "props". 
  
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
          - To have access to each argument (`{id, title, isComplete}` we will need to use in the return the props + varName to be able to access the data. 
  
3. How is the ~~strikethrough~~ style applied when the task title is clicked?
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.
    - This will be done by changing the Task Key to True this could be done using Passing Down Event Handlers if the task isComplete. 

4. What `props` does `TaskList` have? Where do they come from?

<<<<<<< HEAD
    TaskList.js has the props:
        id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
=======
    TaskList.js has the props which are id that required number, titlethat is requuired and is a string, and lastly if the task is complete is a bool that is required. 
>>>>>>> 5b7a5e35671dd0fe970b344e719a66325028db3e

5. Where is the function `getTaskListJSX` called in `TaskList`?
   This is in TaskList.js. 
    - How would the code change without this helper function?
  
    The tasklist can create a map or a copy for each task. 
    - You would have to iterate throught the array given and create a new array with the data individually. 

6. What component is `TASKS` passed to in `App`?
    - TASKS is a list of objects, which each object is a task with an id, tittle, is complete.

    - How does the component pass `TASKS`?
<<<<<<< HEAD
        - Task is passed with an import Task from './Task';
    - What element is the component wrapped in?
=======
    The components are key, the id, the title, and if the item is compete. 
    
    What element is the component wrapped in?
    - The id is a number.  
    - The title is a string. 
    - The item is a boolean. 
    
>>>>>>> 5b7a5e35671dd0fe970b344e719a66325028db3e

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








