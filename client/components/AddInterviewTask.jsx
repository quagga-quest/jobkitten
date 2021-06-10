import React from 'react';

const AddInterviewTask = (props) => {

  return (
    <div style={{display: "flex", flexDirection: "column", border: "black 1px solid", alignItems: "center"}}>
      <h2>Add the interview steps that you want to track for this job: </h2>
      <form onSubmit={()=>props.handleAdd(event)}>
        <select id="interviewSteps">
          <option value="phone_screen">Phone Screen</option>
          <option value="technical_interview">Technical Phone Interview</option>
          <option value="take_home">Take-Home Assessment</option>
          <option value="on_site">On-Site Interview</option>
          <option value="interview_follow_up">Interview Follow-Up</option>
        </select>
        <button type="submit" style={{marginLeft: "10px"}}>Add Task</button>
      </form>
    </div>
  )
}

export default AddInterviewTask;