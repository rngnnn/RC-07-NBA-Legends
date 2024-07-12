import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Player = ({name,img,statistics}) => {

    const[showResim,setShow]=useState(true)
   
  return (
    <Card
      className="rounded-2 m-auto player-kart"
      role="button"
      onClick={() => setShow(!showResim)}
    >
      {showResim ? (
        <Card.Img className="player-resim" variant="top" src={img} />
      ) : (
        <ul className='m-auto'>
         
{statistics.map((item,index)=>(
    <li key={index} className='h5 list-unstyled text-start'>
    
    
    🏀{item}</li>
))}

        </ul>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default Player