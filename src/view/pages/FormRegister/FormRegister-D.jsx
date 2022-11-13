import axios from "axios";
import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Tanggal from "../../components/Tanggal";
import moment from "moment";
// import ReactDomServer from "react-dom";

function FormDataPelayanan(props) {
  const [data, setData] = useState([]);

  // baseUrl = "http://localhost/api";

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

  // changeHandler = (e) => {
  //   useState({ [e.target.name]: e.target.value });
  // };
  // submitHandler = (e) => {
  //   let y = moment().endOf("month");
  //   let interval = moment(y).recur().every(["sun"]).daysOfWeek();
  //   // let x = interval.next(4, "YYYY-MM-DD");
  //   e.preventDefault();
  //   // let url = "http://localhost/api/pelayanan/add";
  //   // console.log(url->toJson());
  // };
  return (
    <>
      {data.pelayanan?.map((v_dp) =>
        v_dp.id_pel === props.id_pel ? (
          <form className="form-group">
            <div>
              <label htmlFor="id_pel">Masukkan ID Pelayanan</label>
              <input
                type="disable"
                name="id_pel"
                className="form-control mb-2"
                value={v_dp.id_pel}
                disabled
                readOnly
                // onChange={this.changeHandler}
              />
              <label htmlFor="id_nama">Masukkan User ID</label>
              <input
                type="text"
                name="id_nama"
                className="form-control mb-2"
                value={v_dp.id_nama}
                // onChange={this.changeHandler}
              />
              <label htmlFor="id_talent">Masukkan Talent ID</label>
              <input
                type="text"
                name="id_talent"
                className="form-control mb-2"
                value={v_dp.id_talent}
                // onChange={this.changeHandler}
              />
              <label htmlFor="id_kelas">Masukkan ID Kelas</label>
              <input
                type="text"
                name="id_kelas"
                className="form-control mb-2"
                value={v_dp.id_kelas}
                // onChange={this.changeHandler}
              />
              <label htmlFor="tamggal_pelayanan">
                Masukkan tanggal pelayanan
              </label>
              <input
                type="date"
                name="tanggal_pelayanan"
                className="form-control mb-2"
                value={v_dp.tanggal_pelayanan}
                // onChange={this.changeHandler}
              />
            </div>
            {/* <button type="submit" className="btn btn-primary">
            Masukkan data!
          </button> */}
          </form>
        ) : (
          ""
        )
      )}
    </>
  );
}
export default FormDataPelayanan;
