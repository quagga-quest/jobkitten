import React from 'react';
import TaskItem from '../components/TaskItem.jsx';

const TaskContainer = (props) => {

  const taskList = [];
  Object.keys(props.taskStatus).forEach((task) => {
    taskList.push(
      <TaskItem
        taskName={task}
        status={props.taskStatus[task]}
        setTaskStatus={props.setTaskStatus}
        handleLink={props.handleLink}
        handleBoolean={props.handleBoolean}
        userId={props.userId} 
        activeAppBox={props.activeAppBox}
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