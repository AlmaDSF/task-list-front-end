import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task(props) {
  const taskId = props.id;
  const taskTitle = props.title;
  const isComplete = props.isComplete;
  const deleteTask = props.deleteTask;
  const updateComplete = props.updateComplete;

  // const Task = ({ id, title, isComplete }) => {
  // const [complete, setComplete] = useState(taskIsComplete);
  // const [isComplete, setIsComplete] = useState(false);

  if (isComplete) {
    console.log(`Is completed ${taskTitle}`);
  } else {
    console.log(`Is not completed ${taskTitle}`);
  }

  const updateTaskComplete = (taskId, status) => {
    console.log(`Updating complete for ${isComplete}`);
    updateComplete(taskId, status);
  };

  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => updateTaskComplete(taskId, !isComplete )}
      >
        {taskTitle}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => deleteTask(taskId)}
      >
        delete
      </button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateComplete: PropTypes.func.isRequired,
};

export default Task;
