import React from 'react'
import {Container,Image} from 'react-bootstrap'
import nbaLogo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
<Image width="200px" src={nbaLogo}/>
<h1 className='display-4 fw-bold font-monospace my-2' >NPA LEGENDS</h1>
    </Container>
  )
}

export default Header