import React, { useEffect, useState } from 'react';
import TaskBadgeDisplay from '../components/TaskBadgeDisplay.jsx';
import TaskContainer from './TaskContainer.jsx';
import AddInterviewTask from '../components/AddInterviewTask.jsx'

const InterviewDetails = (props) => {
  // need to pass down jobID, jobName, jobCompany as props from the dashboard view
  const [intTaskStatus, setIntTaskStatus] = useState({});

  const [appStatus, setAppStatus] = useState("in progress");
  // statuses
  // interested
  // in progress
  // completed
  // interview
  // rejected
  // hired

  // initial fetch to update task status with user info from DB
  // fetch('/jobs/xxx')
  // .then((res) => {
  //   return res.json();
  // }).then((res) => {
  //   setTaskStatus(XXX)
  // })

  // update taskStatus state based on task form submissions (this is invoked in TaskItem)
  const handleAdd = event => {
    event.preventDefault();
    const taskCopy = intTaskStatus;
    const taskName = event.target.interviewSteps.value;
    taskCopy[taskName] = 0;
    setIntTaskStatus({...taskCopy});

    // post request to update task upon submission
    const bodyData = {
      [taskName]: 0 
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

   // update taskStatus state based on task form submissions (this is invoked in TaskItem)
   const handleBoolean = event => {
    event.preventDefault();
    const taskCopy = intTaskStatus;
    const taskName = event.target.id;
    const inputData = event.target.checkBox.value;
    taskCopy[taskName] = inputData;
    setIntTaskStatus({...taskCopy});
  
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
      <TaskBadgeDisplay appStatus={appStatus} incomplete={["interested", "in progress", "completed", "interview"]}/>
      <TaskContainer taskStatus={intTaskStatus} setTaskStatus={setIntTaskStatus} handleBoolean={handleBoolean}/>
      <AddInterviewTask handleAdd={handleAdd} />
    </div>
  )
}

export default InterviewDetails