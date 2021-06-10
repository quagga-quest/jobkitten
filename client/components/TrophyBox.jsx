import React from 'react';

const TrophyBox = (props) => {


  return (
    <div style={{display: "flex", justifyContent: "center", gridColumnStart: `${props.colStart}`, gridColumnEnd: "span 1", gridRowStart: `${props.rowStart}`, gridRowEnd: "span 1" }}>
      <img src={props.url} style={{ maxHeight: "120px", maxWidth: "150px"}}/>
    </div>
  )
}

export default TrophyBox;