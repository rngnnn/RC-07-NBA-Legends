import React, { useState } from 'react'

import {data} from "../helper/data"
import { Col, Container, Form, Row } from 'react-bootstrap'
import Player from './Player'

const CardContainer = () => {
// console.log(data);
const[arama,setArama]=useState("")

//!1.yol
 
// let filtrelenmişData= data.filter((a)=>a.name.includes(arama))
 // console.log(filtrelenmişData);
  return (
    <>
      <Form.Control className='w-50 m-auto' type="search" placeholder="Search Player..." onChange={(e)=> setArama(e.target.value)} />

      <Container className="kart-container rounded-4 my-4 p-3 ">
        <Row className="g-3 ">
          {/* {filtrelenmişData.map((player) => ( */}
          {data.filter((abc)=>abc.name.toLowerCase().includes(arama.toLowerCase())).map((player) => (
            <Col md={6} lg={4} xl={3} key={player.name}>
              <Player {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default CardContainer