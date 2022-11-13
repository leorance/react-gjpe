import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navigation from "./view/components/Navigation";
import Home from "./view/pages/Home";
import Kelasa from "./view/pages/Kelas-a";
import Addata from "./view/pages/add-data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kelas/:kelas" element={<Kelasa />}></Route>
          <Route path="/add-data" element={<Addata />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
