import React from 'react';
import TrophyBox from '../components/TrophyBox.jsx'

const TrophyContainer = (props) => {


  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(3, 1fr)"}}>
      <TrophyBox colStart="1" rowStart="1" />
      <TrophyBox colStart="2" rowStart="1" />
      <TrophyBox colStart="3" rowStart="1" />
      <TrophyBox colStart="4" rowStart="1" />
    </div>
  )
}

export default TrophyContainer;