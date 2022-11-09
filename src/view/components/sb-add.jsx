import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabel from "./Tabel";
import React from "react";
import FormA from "../pages/FormRegister/FormRegister-A";
import FormB from "../pages/FormRegister/FormRegister-B";
import FormC from "../pages/FormRegister/FormRegister-C";
import FormD from "../pages/FormRegister/FormRegister-D";

function SideBar() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Data Kelas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Data Talenta</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Data Diri</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Tes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Penambahan Kelas</h2>
              <FormA />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <h2>Penambahan Talenta</h2>
              <FormB />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              <h2>Penambahan Pelayan</h2>
              <FormC />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              <h2>Pelayanan</h2>
              <FormD />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SideBar;
