import SideBar from "../components/SideBar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function kelasA(props) {
  // eslint-disable-next-line
  const params = useParams();
  // console.log(params);
  return (
    <div className="App">
      <div className="container">
        <br />
        <SideBar kelas={params.kelas} />
      </div>
    </div>
  );
}

export default kelasA;
