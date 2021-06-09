import React from 'react';

const StickerBox = (props) => {


  return (
    <div style={{display: "flex", justifyContent: "center", border: "solid 1px black", gridColumnStart: `${props.colStart}`, gridColumnEnd: "span 1", gridRowStart: `${props.rowStart}`, gridRowEnd: "span 1" }}>
      <img src="../../assets/question-mark.png" style={{height: "100px", width: "100px"}} />
    </div>
  )
}

export default StickerBox;