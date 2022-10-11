import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const Tabel = () => {
  const [classes, setClasses] = useState([]);

  const getClasses = async () => {
    try {
      const response = await axios.get("http://192.168.3.1:8000/api/classes");
      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  /*const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
  ];*/
  const columns = [
    {
      name: "Class ID",
      selector: (row) => row.id_kelas,
    },
    {
      name: "Class Name",
      selector: (row) => row.nama_kelas,
    },
  ];
  useEffect(() => {
    getClasses();
  }, []);
  return <DataTable columns={columns} data={classes} />;
};

export default Tabel;
