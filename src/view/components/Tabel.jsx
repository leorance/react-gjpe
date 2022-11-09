import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Table } from "react-bootstrap";

function Tabel() {
  const [data, setData] = useState([]);

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

  // function x (props){
  //   {data.pelayanan?.map((v_dp) =>
  // }
  let simpen = null;
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
            v_dp.tanggal_pelayanan === "2022-10-02" &&
            v_dp.id_kelas === "CLA1" ? (
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
                <td>update || delete</td>
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
