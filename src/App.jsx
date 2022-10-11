import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Kelasa from "./pages/Kelas-a";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kelas-a" element={<Kelasa />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
