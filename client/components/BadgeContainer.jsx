import React from 'react';

const BadgeContainer = () => {

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
  
  return (
    <div style={{display: "flex", flexDirection: "column", border: "solid 1px black"}}>
      
    </div>
  )
}

export default BadgeContainer;