import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class FormDataDiri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_nama: "",
      nama_usr: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost/api/uname/add";
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
    const { id_nama, nama_usr } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler} className="form-group">
          <div>
            <label htmlFor={id_nama}>Masukkan ID Pelayan</label>
            <input
              type="text"
              name="id_nama"
              className="form-control"
              value={id_nama}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor={nama_usr}>Masukkan Nama Pelayan</label>
            <input
              type="text"
              name="nama_usr"
              className="form-control"
              value={nama_usr}
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

export default FormDataDiri;
