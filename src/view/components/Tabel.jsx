import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Forms from "../pages/FormRegister/FormRegister-D";
function Tabel({ v_cla, vt, tugas }) {
  const [data, setData] = useState([]);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const count = 0;
  const apiCall = async () => {
    const url = "http://localhost/api";
    const req = axios.get(url);
    const res = await req;
    setData({
      user: res.data.data_uname,
      talent: res.data.data_talents,
      class: res.data.data_class,
      pelayanan: res.data.data_pelayanan,
    });
  };

  useEffect(() => {
    apiCall();
  }, []);
  // console.log(vt);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tugas</th>
            <th>Kelas</th>
            <th>Tanggal Pelayanan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* looping data pelayanan */}
          {data.pelayanan?.map((v_dp) =>
            v_dp.tanggal_pelayanan === vt && v_dp.id_kelas === v_cla ? (
              <tr key={v_dp.id_pel}>
                <td>
                  {data.user?.map((v_du) =>
                    v_du.id_nama === v_dp.id_nama ? <>{v_du.nama_usr}</> : ""
                  )}
                </td>
                <td>
                  {data.talent?.map((v_tl) =>
                    v_tl.id_talent === v_dp.id_talent ? (
                      <>{v_tl.nama_talent}</>
                    ) : (
                      ""
                    )
                  )}
                </td>
                <td>
                  {data.class?.map((v_cl) =>
                    v_cl.id_kelas === v_dp.id_kelas ? (
                      <>{v_cl.nama_kelas}</>
                    ) : (
                      ""
                    )
                  )}
                </td>
                <td>{v_dp.tanggal_pelayanan}</td>
                <td>
                  <>
                    <Button variant="outline-warning" onClick={handleShow}>
                      Update
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Update data</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{<Forms id_pel={v_dp.id_pel} />}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                </td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Tabel;

// {value === "goal" ? <MadeGoal /> : <MissedGoal />;}
