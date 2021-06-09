import React from 'react';
import StickerBox from '../components/StickerBox.jsx'

const StickerContainer = (props) => {
  // props to pass: image URL, whether the achievement has been achieved

  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(10, 1fr)"}}>
      <StickerBox colStart="1" rowStart="1" />
      <StickerBox colStart="2" rowStart="1" />
      <StickerBox colStart="3" rowStart="1" />
      <StickerBox colStart="4" rowStart="1" />
    </div>
  )
}

export default StickerContainer;