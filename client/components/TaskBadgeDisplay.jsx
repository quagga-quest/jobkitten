import React, {useEffect} from 'react';
import images from '../assets/images';


const TaskBadgeDisplay = (props) => {

  const randomNum = Math.floor(Math.random()*22);

  const incompleteView = () => {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>{images.ninjaKittyCaption[`${randomNum}`]}</h2>
        <div>
          <img src={images.ninjaKitty[`${randomNum}`]} style={{maxHeight: "220px", maxWidth: "200px"}}/>
        </div>
      </div>
    )
  }

  const completeView = () => {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>All Done!</h2>
        <div style={{marginBottom: "20px"}}>
          <img src={images.sticker[15]} style={{ maxHeight: "200px", maxWidth: "280px"}} />
        </div>
      </div >
    )
  }

  const incompleteArr = props.incomplete;


  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      { incompleteArr.includes(props.jobDetails.status)  ? (
        incompleteView()
      ) : (
        completeView()
      )}
    </div>
  )
}

export default TaskBadgeDisplay;