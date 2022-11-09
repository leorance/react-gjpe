import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import DataTable from "react-data-table-component";
import axios from "axios";
import Image from "react-bootstrap/Image";

// https://api.github.com/users/ejirocodes/followers
// https://api.github.com/users/ejirocodes
// https://api.github.com/users/ejirocodes/repos
// https://api.github.com/users/ejirocodes/following

function Tabel() {
  const [users, setUser] = useState([]);
  const [talents, setTalent] = useState([]);
  const [classes, setClass] = useState([]);
  const [pelayanan, setPelayanan] = useState([]);

  const getGithubData = () => {
    let endpoints = [
      "http://localhost/api/users",
      "http://localhost/api/classes",
      "http://localhost/api/pelayanan",
      "http://localhost/api/talents",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([
        { data: users },
        { data: classes },
        { data: pelayanan },
        { data: talents },
      ]) => {
        setUser(users);
        setTalent(talents);
        setClass(classes);
        setPelayanan(pelayanan);
      }
    );
  };
  useEffect(() => {
    getGithubData();
  }, []);
  /*const Tabel = () => {
  const [va1, setVa1] = useState([]);
  const [va2, setVa2] = useState([]);
  const [va3, setVa3] = useState([]);

  const getClasses = () => {
    let one = "http://localhost/api/classes";
    let two = "http://localhost/api/users";
    let three = "http://localhost/api/pelayanan";

    let requestOne = axios.get(one);
    let requestTwo = axios.get(two);
    let requestThree = axios.get(three);

    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          response.data.forEach(movie => console.log(movie.title));
          // use/access the results
          setVa1(responseOne);
          setVa2(responseTwo);
          setVa3(responesThree);
          console.log(responseOne);
          console.log(responseTwo);
          console.log(responesThree);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.error(errors);
      });
  };
  /*const columns = [
    {
      name: "Class ID",
      selector: (row) => row.nama_kelas,
    },
    {
      name: "Class Name",
      selector: (row) => row.nama_user,
    },
    {
      name: "Class Name",
      selector: (row) => row.id_user,
    },
  ];
  const data = [va1, va2, va3];
  return <DataTable columns={columns} data={data} />;*/
  /*useEffect(() => {
    getClasses();
  }, []);
  return (
    /*<Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{va1}</td>
          <td>{va2}</td>
          <td>{va3}</td>
        </tr>
      </tbody>
    </Table>*/
  // <h1>va1</h1>
  // );
  return (
    /*<section style={{ display: "flex" }}>
      <section>
        <h2>Followers</h2>
        {followers.length > 0 && (
          <div>
            {followers.map((follower) => (
              <div key={follower.id}>
                <img src={follower.avatar_url} alt={follower.html_url} />
                <p>GitHub Profile: {follower.html_url}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <section>
        <h2>Following</h2>
        {followings.length > 0 && (
          <div>
            {followings.map((following) => (
              <div key={following.id}>
                <img src={following.avatar_url} alt={following.html_url} />
                <p>GitHub Profile: {following.html_url}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>*/
    <Table>
      <thead>
        <tr>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {pelayanan.length > 0 && (
            <td>
              {pelayanan.map((pel) => (
                <p key={pel.id_pel}>{pel.id_kelas}</p>
              ))}
            </td>
          )}
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabel;
