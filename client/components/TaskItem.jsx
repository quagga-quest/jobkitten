import React from 'react';
import images from '../assets/images';
import {Button, Checkbox, TextField} from '@material-ui/core';


const TaskItem = (props) => {
  // props needed:
  // task name
  // task status -> null or not null
  
  const taskNames = {
    reachout_out: 'Connect with Someone at the Company',
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
      { linkTypes.includes(props.name) ? (
        <form id={props.name} onSubmit={()=>props.handleLink(event)}>
          {/* <input id="inputData" type="text"></input> */}
          <TextField id="inputData" label="Link to Document" variant="outlined" />
          <Button type="submit" variant="contained" color="primary" style={{marginLeft: "10px"}}>Submit</Button>
        </form>
      ) : (
        <form id={props.name} onSubmit={()=>props.handleBoolean(event)}>
          {/* <input type="checkbox" id="checkBox" value="true"></input> */}
          <Checkbox color="secondary" id="checkBox" value="true"></Checkbox>
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
        <div style={{marginLeft: "40px", marginBottom: "20px"}}>Completed</div>
      ) : (
        <div style={{marginLeft: "40px", marginBottom: "20px"}}>Completed: <a href={props.status} target="_blank">View Document</a></div>
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
        <h2 style={{marginLeft: "10px", marginRight: "10px"}}>{taskNames[props.name]}</h2>
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