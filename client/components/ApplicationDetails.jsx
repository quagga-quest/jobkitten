import React, { useState } from 'react';
import BadgeContainer from './BadgeContainer.jsx';
import TaskContainer from './TaskContainer.jsx';

const ApplicationDetails = () => {
  const [taskStatus, setTaskStatus] = useState({
    task1: null,
    task2: "www.fun.com",
    task3: true,
    task4: null,
    task5: null
  });

  const [appStatus, setAppStatus] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log('event fired')
    let taskCopy = taskStatus;
    console.log('try to grab task name', event.target.id);
    // console.log('inputVal', inputVal.value)
    console.log('inputVal', event.target.inputData.value)
    taskCopy[event.target.id] = event.target.inputData.value;
    console.log('check taskCopy', taskCopy)
    setTaskStatus({...taskCopy});
    console.log('check taskStatus', taskStatus)
  }

  // fetch request for application data on the specific app ID
  // useEffect that listens for taskStatus changing state and executes a post request to update 

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <BadgeContainer appStatus={taskStatus} />
      <TaskContainer taskStatus={taskStatus} setTaskStatus={setTaskStatus} handleSubmit={handleSubmit} />
    </div>
  )
}

export default ApplicationDetails