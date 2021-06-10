import React from 'react';

const StickerBox = (props) => {

  console.log('stickerBox props', props.url)

  return (
    <div style={{display: "flex", justifyContent: "center", border: "solid 1px black", gridColumnStart: `${props.colStart}`, gridColumnEnd: "span 1", gridRowStart: `${props.rowStart}`, gridRowEnd: "span 1" }}>
      <img src={props.url} style={{ maxHeight: "50px", maxWidth: "70px"}}/>
    </div>
  )
}

export default StickerBox;