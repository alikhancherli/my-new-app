import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Button block>Btn 1</Button>
        </Col>

        <Col>
        <Button block variant='success'>Click Me</Button>
        </Col>

        <Col>
          <p>
            Salam
          </p>
        </Col>

        <Col>
          <p>
            Salam
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
