import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Tanggal from "../../components/Tanggal";
import moment from "moment";

export class FormDataDiri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      id_pel: "",
      id_nama: "",
      id_kelas: "",
      id_talent: "",
      tanggal_pelayaan: "",
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
    let url =
      "http://localhost/api/pelayanan/add?id_pel=PEL1&id_nama=U1&id_talent=T1&id_kelas=CA11&tanggal_pelayanan=" +
      x[0];
    console.log(url);
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
    const { id_pel, id_nama, id_kelas, id_talent, tanggal_pelayaan } =
      this.state;
    const v1 = "PEL1";
    const v2 = "USR1";
    const v3 = "TAL1";
    const v4 = "CA11";
    // let v5 = x[0];
    return (
      <>
        <form onSubmit={this.submitHandler} className="form-group">
          <div>
            <input
              type="hidden"
              name="id_pel"
              className="form-control"
              value={v1}
              onChange={this.changeHandler}
            />
            <input
              type="hidden"
              name="id_nama"
              className="form-control"
              value={v2}
              onChange={this.changeHandler}
            />
            <input
              type="hidden"
              name="id_talent"
              className="form-control"
              value={v3}
              onChange={this.changeHandler}
            />
            <input
              type="hidden"
              name="id_kelas"
              className="form-control"
              value={v4}
              onChange={this.changeHandler}
            />
            <input
              type="hidden"
              name="tanggal_pelayanan"
              className="form-control"
              value={v4}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Masukkan data!
          </button>
        </form>
      </>
    );
  }
}

export default FormDataDiri;
