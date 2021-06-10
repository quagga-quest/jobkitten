import React from 'react';
import TrophyBox from '../components/TrophyBox.jsx'
import images from '../assets/images';
import { 
  Container,
  Typography
 } from "@material-ui/core";


const TrophyContainer = (props) => {

  

  let trophyCount = 7;
  const trophyArray = [];
  let row = 1;
  let col = 1;
  for (let i = 1; i <= trophyCount; i+=1){
    //if col get more that 5, reset col to 1 and increment row one
      if (col === 5){
        col = 1
        row += 1
      };
      trophyArray.push(<TrophyBox colStart={col} rowStart={row} url={images.kawaiiFruit[i]} key={`key#${i}`}/>)
    col += 1  
    console.log(trophyArray)
  }

  return (
    <div>
    <Container>
    <Typography variant="h2" component="h2" color="primary" align="center">
    Kawaii Fruit 
  </Typography>
    <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(3, 1fr)"}}>
      {trophyArray}
    </div>
    </Container>

    </div>

  )
}

export default TrophyContainer;