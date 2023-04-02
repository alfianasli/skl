import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Profil from "./Page/Profil";
import Registerr from "./Page/Registerr";
import Search from "./Page/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Registerr />} />
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
