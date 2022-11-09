import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function Tabel() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const apiKey = "f8fdeabb5bd662229e0fec362e935f57";

  const apiCall = async (e) => {
    e.preventDefault();
    const loc = e.target.elements.loc.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    const req = axios.get(url);
    const res = await req;
    setWeather({
      descp: res.data.weather[0].description,
      temp: res.data.main.temp,
      city: res.data.name,
      humidity: res.data.main.humidity,
      press: res.data.main.pressure,
    });
    setCity(res.data.name);
  };

  //Converting K to C
  let k = weather.temp;
  let C = k - 273.15;

  const Weath = () => {
    return (
      <div>
        <div className="winfo">
          Weather information for {city}
          <hr></hr>
        </div>
        <div className="Weath">
          <div className="welement">Weather : {weather.descp}</div>
          <div className="welement">Temperature : {C.toFixed(2)} &#8451;</div>
          <div className="welement">Humidity :{weather.humidity} %</div>
          <div className="welement">Pressure : {weather.press} mb</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="weathhead">Weather Info</div>
      <div className="mainweather">
        <div className="weather">
          <form onSubmit={apiCall} className="form">
            <input type="text" placeholder="city" name="loc" />
            <button className="bttn">Search</button>
          </form>
          {weather && <Weath />}
        </div>
      </div>
    </>
  );
}

export default Tabel;
/*const [data, setData] = useState([]);
  .then((data) => setActivity)
  const apiCall = async () => {
    const url = "http://localhost/api";
    const req = axios.get(url);
    const res = await req;
    setData({
      user: res.data.data_users,
      talent: res.data.data_talents,
      class: res.data.data_class,
      pelayanan: res.data.data_pelayanan,
    });*/

// const arr = Array.from(data.user);

/*<>
  <h1>Hello worlds</h1>
  {Array.from(data.user).map((e) => (
    <li>{e.nama_user}</li>
    ))}
    </>*/

{
  /* {Object.values(data.class).map(({ nama_kelas, id_kelas }) => (
    <Fun v_nk={nama_kelas} v_id={id_kelas} />
  ))} */
}
