import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Admin from "./components/AdminPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showdetails" element={<ShowDetails />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
};

export default App;
