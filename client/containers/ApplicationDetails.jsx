import React, { useEffect, useState } from 'react';
import TaskBadgeDisplay from '../components/TaskBadgeDisplay.jsx';
import TaskContainer from './TaskContainer.jsx';

const ApplicationDetails = (props) => {
  const [taskStatus, setTaskStatus] = useState({});
  const [jobDetails, setJobDetails] = useState({});

  // initial fetch to update task status with user info from DB
  useEffect(() => {
    fetch(`http://localhost:3333/jobs/${props.userId}/${props.activeAppBox}`)
    .then((res) => {
      return res.json();
    }).then((res) => {
      // console.log('res json', res);
      const statusObj = {
        reach_out: res.reach_out,
        resume_link: res.resume_link,
        cover_letter_link: res.cover_letter_link,
        follow_up: res.follow_up,
        submit_application: res.submit_application,
      };
      setTaskStatus({...statusObj});
      
      const jobDetailsObj = {
        job_id: res.job_id,
        status: res.status,
        job_title: res.job_title,
        company: res.company
      };
      setJobDetails({...jobDetailsObj});
      console.log('new statusObj', taskStatus);
      console.log('jobDetails', jobDetails);
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
      field: taskName,
      value: inputData
    };


    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    }

    fetch(`http://localhost:3333/jobs/update/${props.activeAppBox}`, requestOptions)
    .then((res) => {
      return res.json();
    }).then((res) => {
      // console.log('res json', res);

    }).catch((e) => console.error(e))

  }

  const handleBoolean = event => {
    event.preventDefault();
    const taskCopy = taskStatus;
    const taskName = event.target.id;
    const inputData = event.target.checkBox.value;
    taskCopy[taskName] = inputData;
    setTaskStatus({...taskCopy});

    // post request to update task upon submission
    const bodyData = {
      field: taskName,
      value: inputData
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    }

    fetch(`http://localhost:3333/jobs/update/${props.activeAppBox}`, requestOptions)
    .then((res) => {
      return res.json();
    }).then((res) => {
      // console.log('res json', res);
      if(jobDetails.status !== 'interested' && res.status !== jobDetails.status) {
        const jobDetailsObj = {
          job_id: res.job_id,
          status: res.status,
          job_title: res.job_title,
          company: res.company
        };
        setJobDetails(jobDetailsObj);
      }

    }).catch((e) => console.error(e))

  }

  // TBD: useEffect that listens for taskStatus changing state and executes a post request to update 
  // useEffect(() => {

  // }, [taskStatus]);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%", marginBottom: "30px"}}>
      <h1>{jobDetails.company}: {jobDetails.job_title}</h1>
      <TaskBadgeDisplay userId={props.userId} activeAppBox={props.activeAppBox} jobDetails={jobDetails} incomplete={["interested", "inProgress"]}/>
      <TaskContainer userId={props.userId} activeAppBox={props.activeAppBox} taskStatus={taskStatus} setTaskStatus={setTaskStatus} handleLink={handleLink} handleBoolean={handleBoolean} />
    </div>
  )
}

export default ApplicationDetails