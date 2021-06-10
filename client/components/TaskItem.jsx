import React from 'react';
import images from '../assets/images';


const TaskItem = (props) => {
  // props needed:
  // task name
  // task status -> null or not null
  
  // event listener onClick will update state, which will trigger the useEffect to do a post request

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setTaskStatus(props.status[props.name] = document.getElementById('inputData').value);
  //   console.log("taskStatus from TI", props);
  // }

  const incompleteView = () => {
    return (
      <form id={props.name} onSubmit={()=>props.handleSubmit(event)}>
        <input id="inputData" type="text"></input>
        <button type="submit" style={{marginLeft: "10px"}}>Submit</button>
      </form>
    )
  }

  const completeView = () => {
    let displayText;
    if(typeof props.status === 'boolean') displayText = "Complete";
    else displayText = `Complete: ${props.status}`;

    return (
      <div>
        {displayText}
      </div>
    )
  }

  return (
    <div style={{display: "flex", flexDirection: "row", border: "black 1px solid", alignItems: "center"}}>
      <div style={{marginLeft: "10px"}}>
        <img src="assets/icon.png" />
      </div>
      <h2 style={{marginLeft: "10px", marginRight: "10px"}}>{props.name}</h2>
      { !props.status ? (
        incompleteView()
      ) : (
        completeView()
      )}
    </div>
  )
}

export default TaskItem;