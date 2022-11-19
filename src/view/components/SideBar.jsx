import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabel from "./Tabel";
import React from "react";
// import Tanggal from "./Tanggal";
import moment from "moment";
import momentRecur from "moment-recur";

let Datee = moment().isoWeekday(7).format("YYYY-MM-DD");
console.log(Datee);
function SideBar(props) {
  console.log(props);
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Minggu I</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Minggu II</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Minggu III</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Minggu IV</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Sesi I</h2>
              {/* <p>
                <Tanggal index={0} />
              </p> */}
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "11"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Sesi II</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "12"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <h2>Sesi III</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "13"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <h2>Sesi I</h2>
              {/* <p>
                <Tanggal index={0} />
              </p> */}
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "21"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <h2>Sesi II</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "22"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <h2>Sesi III</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "23"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              <h2>Sesi I</h2>
              {/* <p>
                <Tanggal index={0} />
              </p> */}
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "31"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              <h2>Sesi II</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "32"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              <h2>Sesi III</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "33"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              <h2>Sesi I</h2>
              {/* <p>
                <Tanggal index={0} />
              </p> */}
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "41"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              <h2>Sesi II</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "42"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              <h2>Sesi III</h2>
              <Tabel
                v_cla={"C" + props.kelas.toUpperCase() + "43"}
                vt={Datee}
              />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SideBar;
