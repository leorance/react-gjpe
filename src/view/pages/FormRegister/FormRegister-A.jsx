import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
// import Tanggal from "../../components/Tanggal";

export class FormKelas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_kelas: "",
      nama_kelas: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost/api/class/add";

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
    const { id_kelas, nama_kelas } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler} className="form-group">
          <div>
            <label htmlFor={id_kelas}>Masukkan ID Kelas</label>
            <input
              type="text"
              name="id_kelas"
              className="form-control"
              value={id_kelas}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor={nama_kelas}>Masukkan Nama Kelas</label>
            <input
              type="text"
              name="nama_kelas"
              className="form-control"
              value={nama_kelas}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Masukkan data!
          </button>
        </form>
      </>
    );
  }
}

export default FormKelas;
