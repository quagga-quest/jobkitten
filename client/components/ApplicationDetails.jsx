import React, { useEffect, useState } from 'react';
import BadgeContainer from './BadgeContainer.jsx';
import TaskContainer from './TaskContainer.jsx';

const ApplicationDetails = (props) => {
  // need to pass down jobID, jobName, jobCompany as props from the dashboard view
  const [taskStatus, setTaskStatus] = useState({
    task1: null,
    task2: "www.fun.com",
    task3: true,
    task4: null,
    task5: null
  });

  const [appStatus, setAppStatus] = useState("");

  // initial fetch to update task status with user info from DB
  // fetch('/jobs/xxx')
  // .then((res) => {
  //   return res.json();
  // }).then((res) => {
  //   setTaskStatus(XXX)
  // })

  // update taskStatus state based on task form submissions (this is invoked in TaskItem)
  const handleSubmit = event => {
    event.preventDefault();
    const taskCopy = taskStatus;
    const taskName = event.target.id;
    const inputData = event.target.inputData.value;
    taskCopy[taskName] = inputData;
    setTaskStatus({...taskCopy});

    // post request to update task upon submission
    const bodyData = {
      [taskName]: inputData 
    };
    console.log('bodyData', bodyData);

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(inputData)
    // }
  }

  // TBD: useEffect that listens for taskStatus changing state and executes a post request to update 
  // useEffect(() => {

  // }, [taskStatus]);

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
      <h1>Job Title</h1>
      <h3>Company</h3>
      <BadgeContainer appStatus={taskStatus} />
      <TaskContainer taskStatus={taskStatus} setTaskStatus={setTaskStatus} handleSubmit={handleSubmit} />
    </div>
  )
}

export default ApplicationDetails