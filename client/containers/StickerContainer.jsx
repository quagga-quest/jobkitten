import React from 'react';
import StickerBox from '../components/StickerBox.jsx'
import images from '../assets/images';
import { 
  Container,
  Typography
 } from "@material-ui/core";



const StickerContainer = (props) => {

  

  let stickerCount = 20;
  const stickerArray = [];
  let row = 1;
  let col = 1;
  for (let i = 1; i <= stickerCount; i+=1){
    //if col get more that 5, reset col to 1 and increment row one
      if (col === 7){
        col = 1
        row += 1
      };
    stickerArray.push(<StickerBox colStart={col} rowStart={row} url={images.sticker[i]} key={`key#${i}`}/>)
    col += 1  
    console.log(stickerArray)
  }


  return (
    <div>
    <Container >
    <Typography variant="h2" component="h2" color="primary" align="center">
    Sticker Board
  </Typography>
  <Typography variant="h5" component="h2" color="primary" align="center">
    Complete a row to earn a new Kawaii Fruit
  </Typography>
    <div style={{display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(10, 1fr)"}}>
      {stickerArray}
    </div>
    </Container>

    </div>
  )
}

export default StickerContainer;


