import React from 'react';
import images from '../assets/images';


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
      <div>
      { linkTypes.includes(props.name) ? (
        <form id={props.name} onSubmit={()=>props.handleLink(event)}>
          <input id="inputData" type="text"></input>
          <button type="submit" style={{marginLeft: "10px"}}>Submit</button>
        </form>
      ) : (
        <form id={props.name} onSubmit={()=>props.handleBoolean(event)}>
          <input type="checkbox" id="checkBox" value="true"></input>
          <button type="submit" style={{marginLeft: "10px"}}>Complete</button>
        </form>
      )}
      </div>

    )
  }

  const completeView = () => {
    let displayText;
    if(props.status === 'true' || typeof props.status === 'boolean') displayText = 'Complete';
    else displayText = `Complete: ${props.status}`;

    return (
      // <div>
      //   {displayText}
      // </div>

      <div>
      { props.status === 'true' || typeof props.status === 'boolean' ? (
        <div>Complete</div>
      ) : (
        <div>Complete: <a href={props.status} target="_blank">View Document</a></div>
      )}
      </div>
    )
  }

  return (
    <div style={{display: "flex", flexDirection: "row", border: "black 1px solid", alignItems: "center"}}>
      <div style={{marginLeft: "10px"}}>
        <img src="assets/icon.png" />
      </div>
      <h2 style={{marginLeft: "10px", marginRight: "10px"}}>{taskNames[props.name]}</h2>
      { !props.status ? (
        incompleteView()
      ) : (
        completeView()
      )}
    </div>
  )
}

export default TaskItem;