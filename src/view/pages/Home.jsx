import Akordion from "../components/Akordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import momentRecur from "moment-recur";
// import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Row>
          <Col>
            <h2>Dashboard Pelayanan</h2>
          </Col>
          <Col md={{ span: 0, offset: 4 }}>
            <h2>{moment().isoWeekday(7).format("dddd, DD MMM YYYY")}</h2>
          </Col>
        </Row>
        <br />
        <br />
        <Akordion />
      </div>
    </div>
  );
}

export default Home;
