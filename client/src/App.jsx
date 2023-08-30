import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Admin from "./components/AdminPage";
import ProfilePage from "./components/ProfilePage";
import Searchbar from "./components/Searchbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showdetails/:showID" element={<ShowDetails />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
