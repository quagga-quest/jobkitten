import React from 'react';
import TaskItem from '../components/TaskItem.jsx';

const TaskContainer = (props) => {

  const taskList = [];
  Object.keys(props.taskStatus).forEach((task) => {
    taskList.push(
      <TaskItem
        name={task}
        status={props.taskStatus[task]}
        setTaskStatus={props.setTaskStatus}
        handleSubmit={props.handleSubmit}
        key={task}
      />
    )
  });

  console.log("taskList", taskList)

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      {taskList}
    </div>
  )
}

export default TaskContainer;