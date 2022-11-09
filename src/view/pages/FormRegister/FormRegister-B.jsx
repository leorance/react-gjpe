import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class FormTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_talent: "",
      nama_talent: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let url = "http://localhost/api/talent/add";
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
    const { id_talent, nama_talent } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler} className="form-group">
          <div>
            <label htmlFor={id_talent}>Masukkan ID Talent</label>
            <input
              type="text"
              name="id_talent"
              className="form-control"
              value={id_talent}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor={nama_talent}>Masukkan Nama Talent</label>
            <input
              type="text"
              name="nama_talent"
              className="form-control"
              value={nama_talent}
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

export default FormTalent;
