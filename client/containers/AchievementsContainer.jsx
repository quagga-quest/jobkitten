import React from 'react';
import TrophyContainer from './TrophyContainer.jsx';
import StickerContainer from './StickerContainer.jsx';

const AchievementsContainer = (props) => {


  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <TrophyContainer />
      <StickerContainer />
    </div>
  )
}

export default AchievementsContainer;