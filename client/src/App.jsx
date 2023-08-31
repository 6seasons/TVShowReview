import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Admin from "./components/AdminPage";
import ProfilePage from "./components/ProfilePage";
import Searchbar from "./components/Searchbar";
import ReviewPage from "./components/ReviewPage";
import EditShowPage from "./components/EditShowPage";
import Register from "./components/Register"
import Login from "./components/Login"


const App = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showdetails/:showID" element={<ShowDetails />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/EditShowPage/:showID" element={<EditShowPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
        <Route path="/Review/:reviewID" element={<ReviewPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
};


export default App;
