import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

//nuevo
const TaskList = ({taskList}) => {
  const getTaskListJSX = (taskList) => {
    return taskList.map((task) => {
// original
const TaskList = ({ tasks }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {

      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(taskList)}</ul>;
};

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
