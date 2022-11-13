import axios from "axios";
import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import Tanggal from "../../components/Tanggal";
import moment from "moment";
// import ReactDomServer from "react-dom";

export class FormDataPelayanan extends Component {
  constructor(props) {
    super(props);
    let c = <Tanggal index={0} />;
    this.state = {
      id_pel: "",
      id_nama: "",
      id_kelas: "",
      id_talent: "",
      tanggal_pelayanan: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    let y = moment().endOf("month");
    let interval = moment(y).recur().every(["sun"]).daysOfWeek();
    let x = interval.next(4, "YYYY-MM-DD");
    e.preventDefault();
    let url = "http://localhost/api/pelayanan/add";
    // console.log(url->toJson());
    axios
      .post(url, this.state)
      .then((res) => {
        if (res.status == 201) {
          alert("Data added successfully!");
        } else {
          alert("Insert data failed!");
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { id_pel, id_nama, id_kelas, id_talent, tanggal_pelayanan } =
      this.state;
    return (
      <>
        <form onSubmit={this.submitHandler} className="form-group">
          <div>
            <label htmlFor="id_pel">Masukkan ID Pelayanan</label>
            <input
              type="text"
              name="id_pel"
              className="form-control mb-2"
              value={id_pel}
              onChange={this.changeHandler}
            />
            <label htmlFor="id_nama">Masukkan User ID</label>
            <input
              type="text"
              name="id_nama"
              className="form-control mb-2"
              value={id_nama}
              onChange={this.changeHandler}
            />
            <label htmlFor="id_talent">Masukkan Talent ID</label>
            <input
              type="text"
              name="id_talent"
              className="form-control mb-2"
              value={id_talent}
              onChange={this.changeHandler}
            />
            <label htmlFor="id_kelas">Masukkan ID Kelas</label>
            <input
              type="text"
              name="id_kelas"
              className="form-control mb-2"
              value={id_kelas}
              onChange={this.changeHandler}
            />
            <label htmlFor="tamggal_pelayanan">
              Masukkan tanggal pelayanan
            </label>
            <input
              type="date"
              name="tanggal_pelayanan"
              className="form-control mb-2"
              value={tanggal_pelayanan}
              onChange={this.changeHandler}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary">
            Masukkan data!
          </button> */}
        </form>
      </>
    );
  }
}

export default FormDataPelayanan;
