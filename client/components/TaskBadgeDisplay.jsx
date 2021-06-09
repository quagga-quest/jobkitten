import React from 'react';

const TaskBadgeDisplay = (props) => {

  // props needed:
  // app status

  const incompleteView = () => {
    return (
      <div>
        <h2>Keep Going!</h2>
        <div>
          <img src="assets/icon.png" />
        </div>
      </div>
    )
  }

  const completeView = () => {
    // add logic to reference image src based on the jobID
    return (
      <div>
        <h2>You Did It!</h2>
        <div>
          <img src="assets/icon.png" />
        </div>
      </div>
    )
  }
  
    // statuses
  // interested
  // in progress
  // completed
  // interview
  // rejected
  // hired

  const incompleteArr = props.incomplete;

  // add logic to conditionally render complete vs. incomplete views
  return (
    <div style={{display: "flex", flexDirection: "column", border: "solid 1px black"}}>
      { incompleteArr.includes(props.appStatus)  ? (
        incompleteView()
      ) : (
        completeView()
      )}
    </div>
  )
}

export default TaskBadgeDisplay;