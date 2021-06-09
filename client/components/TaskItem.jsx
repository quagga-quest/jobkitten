import React from 'react';

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
        <button type="submit">Submit</button>
      </form>
    )
  }

  const completeView = () => {
    return (
      <div>
        Complete: {props.status}
      </div>
    )
  }

  return (
    <div display="flex" flexDirection="row" border="black 1px solid">
      <img src="assets/icon.png" />
      <h2>{props.name}</h2>
      { !props.status ? (
        incompleteView()
      ) : (
        completeView()
      )}
    </div>
  )
}

export default TaskItem;