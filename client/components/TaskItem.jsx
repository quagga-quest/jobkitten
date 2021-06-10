import React from 'react';
import images from '../assets/images';
import {Button, Checkbox, TextField} from '@material-ui/core';


const TaskItem = (props) => {
  
  const taskNames = {
    reach_out: 'Connect with Someone at the Company',
    resume_link: 'Update Resume',
    cover_letter_link: 'Write Cover Letter',
    follow_up: "Send Follow-Up to the Contact",
    submit_application: "Submit Application",
    phone_screen: 'Recruiter Phone Screen',
    technical_interview: 'Technical Phone Interview',
    take_home: 'Take-Home Assessment',
    on_site: 'On-Site Interview',
    interview_follow_up: 'Interview Follow-up'
  }


  const linkTypes = ['resume_link', 'cover_letter_link'];



  const incompleteView = () => {
    return (
      <div style={{marginLeft: "40px", marginBottom: "20px"}}>
      { linkTypes.includes(props.taskName) ? (
        <form id={props.taskName} onSubmit={()=>props.handleLink(event)}>
          <TextField id="inputData" label="Link to Document" variant="outlined" />
          <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>Submit</Button>
        </form>
      ) : (
        <form id={props.taskName} onSubmit={()=>props.handleBoolean(event)}>
          <Checkbox color="secondary" id="checkBox" value={true}></Checkbox>
          <Button type="submit" variant="contained" color="secondary" style={{marginLeft: "10px"}}>Complete</Button>
        </form>
      )}
      </div>

    )
  }

  const completeView = () => {
    return (
      <div>
      { props.status === 'true' || typeof props.status === 'boolean' ? (
        <div style={{marginLeft: "40px", marginBottom: "20px", color: "green"}}>Completed</div>
      ) : (
        <div style={{marginLeft: "40px", marginBottom: "20px", color: "green"}}>Completed: <a href={props.status} target="_blank">View Document</a></div>
      )}
      </div>
    )
  }

  return (
    <div style={{display: "flex", flexDirection: "column", border: "black 1px solid"}}>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <div style={{marginLeft: "10px"}}>
          <img src="../assets/arrow-icon.png" style={{height: "20px", width: "20px"}}/>
        </div>
        <h2 style={{marginLeft: "10px", marginRight: "20px"}}>{taskNames[props.taskName]}</h2>
      </div>
      {/* <div> */}
      { !props.status ? (
        incompleteView()
      ) : (
        completeView()
      )}
      {/* </div> */}
      
    </div>
  )
}

export default TaskItem;