import React, { useEffect, useState } from 'react';
import TaskBadgeDisplay from '../components/TaskBadgeDisplay.jsx';
import TaskContainer from './TaskContainer.jsx';

const ApplicationDetails = (props) => {
  // need to pass down jobID, jobName, jobCompany as props from the dashboard view
  const [taskStatus, setTaskStatus] = useState({
    // reachout_out: null,
    // resume_link: "https://www.fun.com",
    // cover_letter_link: null,
    // follow_up: null,
    // submit_application: null
  });
  const [appStatus, setAppStatus] = useState("completed");
  const [jobDetails, setJobDetails] = useState({
    job_title: "Fullstack Engineer",
    company: "Google"
  })
  // statuses
  // interested
  // in progress
  // completed
  // interview
  // rejected
  // hired

  // initial fetch to update task status with user info from DB
  useEffect(() => {
    fetch(`http://localhost:3333/jobs/${props.userId}/${props.activeAppBox}`)
    .then((res) => {
      return res.json();
    }).then((res) => {
      console.log('res json', res);
      const statusObj = {
        reach_out: res.reach_out,
        resume_link: res.resume_link,
        cover_letter: res.cover_letter_link,
        follow_up: res.follow_up,
        submit_application: res.submit_application 
      };
      setTaskStatus(statusObj);
      console.log('new statusObj', statusObj);
    }).catch((e) => console.error(e))
  }, []);

  // update taskStatus state based on task form submissions (this is invoked in TaskItem)
  const handleLink = event => {
    event.preventDefault();
    const taskCopy = taskStatus;
    const taskName = event.target.id;
    const inputData = event.target.inputData.value;
    taskCopy[taskName] = inputData;
    setTaskStatus({...taskCopy});

    // post request to update task upon submission
    const bodyData = {
      job_id: props.job_id,
      updateField: event.target.id,
      newValue: inputData
    };
    console.log('bodyData', bodyData);

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(inputData)
    // }

    // fetch('/jobs/update/id', requestOptions)

  }

  const handleBoolean = event => {
    event.preventDefault();
    const taskCopy = taskStatus;
    const taskName = event.target.id;
    const inputData = event.target.checkBox.value;
    taskCopy[taskName] = inputData;
    setTaskStatus({...taskCopy});
  }

  // TBD: useEffect that listens for taskStatus changing state and executes a post request to update 
  // useEffect(() => {

  // }, [taskStatus]);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%", marginBottom: "30px"}}>
      <h1>{jobDetails.company}: {jobDetails.job_title}</h1>
      <TaskBadgeDisplay userId={props.userId} activeAppBox={props.activeAppBox} appStatus={appStatus} incomplete={["interested", "in progress"]}/>
      <TaskContainer userId={props.userId} activeAppBox={props.activeAppBox} taskStatus={taskStatus} setTaskStatus={setTaskStatus} handleLink={handleLink} handleBoolean={handleBoolean} />
    </div>
  )
}

export default ApplicationDetails