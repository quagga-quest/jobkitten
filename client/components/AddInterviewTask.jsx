import React, {useState} from 'react';
import {Button, Select, MenuItem} from '@material-ui/core';

const AddInterviewTask = (props) => {
  const [task, setTask] = useState('');

  const handleChange = event => {
    console.log('target value', event.target.value);
    setTask(event.target.value);
    console.log('task', task);
    console.log('target value AFTER', event.target.value);
    
  };

  return (
    <div style={{display: "flex", flexDirection: "column", border: "black 1px solid", alignItems: "center", marginTop: "30px"}}>
      <h2 style={{marginLeft: "20px", marginRight: "20px"}}>Add the interview steps that you want to track for this job: </h2>
      <form onSubmit={()=>props.handleAdd(event)} style={{marginBottom: "20px"}}>
        <select id="interviewSteps">
          <option value="phone_screen">Phone Screen</option>
          <option value="technical_interview">Technical Phone Interview</option>
          <option value="take_home">Take-Home Assessment</option>
          <option value="on_site">On-Site Interview</option>
          <option value="interview_follow_up">Interview Follow-Up</option>
        </select>
        <Button type="submit" color="primary" variant="contained" style={{marginLeft: "10px"}}>Add Task</Button>
      </form>
    </div>
  )
}

export default AddInterviewTask;