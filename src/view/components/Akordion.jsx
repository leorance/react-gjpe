import Accordion from "react-bootstrap/Accordion";
// import Tabel from "./Tabel";
// import moment from "moment";
import Table from "react-bootstrap/Table";

function Akordion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pelayanan Kelas A</Accordion.Header>
        <Accordion.Body>
          {/* <Tabel /> */}
          <Table striped>
            <thead>
              <tr>
                <th>Jenis Pelayanan</th>
                <th>Nama Pemain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Drummer</th>
                <td>Samuel</td>
              </tr>
              <tr>
                <th>Keyboard</th>
                <td>Matthew</td>
              </tr>
              <tr>
                <th>Gitar</th>
                <td>Benaya</td>
              </tr>
              <tr>
                <th>Operator Sound</th>
                <td>Cheryl</td>
              </tr>
              <tr>
                <th>Operator Mulmed</th>
                <td>Audi</td>
              </tr>
              <tr>
                <th>Worship Leader</th>
                <td>Callista</td>
              </tr>
              <tr>
                <th>Pembawa Firman</th>
                <td>William Pakpahan</td>
              </tr>
              <tr>
                <th>Singer</th>
                <td>Chika</td>
              </tr>
              <tr>
                <th>Usher</th>
                <td>Caesar</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pelayanan Kelas B</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pelayanan Kelas C</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Akordion;
