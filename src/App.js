
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

// import {Container,Button} from "react-bootstrap";
function App() {
  return (
    <Container className="text-center">
     
<Header/>

<CardContainer/>
    </Container>
  );
}

export default App;
