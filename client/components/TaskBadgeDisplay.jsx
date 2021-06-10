import React from 'react';
import images from '../assets/images';


const TaskBadgeDisplay = (props) => {

  // props needed:
  // app status
  const randomNum = Math.floor(Math.random()*22);

  const incompleteView = () => {
    return (
      <div>
        <h2>{images.ninjaKittyCaption[`${randomNum}`]}</h2>
        <div>
          <img src={images.ninjaKitty[`${randomNum}`]} style={{maxHeight: "220px", maxWidth: "200px"}}/>
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