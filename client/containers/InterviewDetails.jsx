import React, { useEffect, useState } from 'react';
import TaskBadgeDisplay from '../components/TaskBadgeDisplay.jsx';
import TaskContainer from './TaskContainer.jsx';
import AddInterviewTask from '../components/AddInterviewTask.jsx'

const InterviewDetails = (props) => {
  const [intTaskStatus, setIntTaskStatus] = useState({});
  const [intJobDetails, setIntJobDetails] = useState({});


  useEffect(() => {
    fetch(`http://localhost:3333/jobs/${props.userId}/${props.activeAppBox}`)
    .then((res) => {
      return res.json();
    }).then((res) => {
      // console.log('res json', res);
      const statusObj = {};
      Object.keys(res).forEach(key => {
        const interviewSteps = ['phone_scree', 'technical_interview', 'on_site', 'take_home', 'interview_follow_up'];
        if(interviewSteps.includes(key)) {
          if(res[key] !== 'null') statusObj[key] = res[key];
        }
      })
      // const statusObj = {
      //   phone_screen: res.phone_screen,
      //   technical_interview: res.technical_interview,
      //   on_site: res.on_site,
      //   take_home: res.take_home,
      //   interview_follow_up: res.interview_follow_up,
      // };
      setIntTaskStatus({...statusObj});
      
      const jobDetailsObj = {
        job_id: res.job_id,
        status: res.status,
        job_title: res.job_title,
        company: res.company
      };
      setIntJobDetails({...jobDetailsObj});
      console.log('new statusObj', intTaskStatus);
      console.log('jobDetails', intJobDetails);
    }).catch((e) => console.error(e))
  }, []);

  // update taskStatus state based on task form submissions (this is invoked in TaskItem)
  const handleAdd = event => {
    event.preventDefault();
    const taskCopy = intTaskStatus;
    const taskName = event.target.interviewSteps.value;
    taskCopy[taskName] = 0;
    setIntTaskStatus({...taskCopy});

    // post request to update task upon submission
    const bodyData = {
      field: taskName,
      value: 0
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
    if(intJobDetails.status !== 'interested' && res.status !== intJobDetails.status) {
      const jobDetailsObj = {
        job_id: res.job_id,
        status: res.status,
        job_title: res.job_title,
        company: res.company
      };
      setIntJobDetails(jobDetailsObj);
    }

  }).catch((e) => console.error(e))

}


  // TBD: useEffect that listens for taskStatus changing state and executes a post request to update 
  // useEffect(() => {

  // }, [taskStatus]);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%"}}>
      <h1>{jobDetails.company}: {jobDetails.job_title}</h1>
      <TaskBadgeDisplay userId={props.userId} activeAppBox={props.activeAppBox} jobDetails={intJobDetails} incomplete={["interested", "inProgress", "completed", "interview"]}/>
      <TaskContainer userId={props.userId} activeAppBox={props.activeAppBox} taskStatus={intTaskStatus} setTaskStatus={setIntTaskStatus} handleBoolean={handleBoolean}/>
      <AddInterviewTask handleAdd={handleAdd} />
    </div>
  )
}

export default InterviewDetails