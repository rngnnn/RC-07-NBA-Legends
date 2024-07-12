import React from 'react'
import { Card } from 'react-bootstrap'

const Player = ({name,img,statistics}) => {
    const [showResim,setShow]=useState(true)

   
  return (
    <Card className='rounded-2 m-auto player-kart' role="button">
      <Card.Img className='player-resim' variant="top" src={img} />

      <Card.Footer >
 <Card.Title>
    {name}
 </Card.Title>
       

      </Card.Footer>
    </Card>
  );
}

export default Player