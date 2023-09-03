import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/ShowDetails";
import Admin from "./components/AdminPage";
import ProfilePage from "./components/ProfilePage";
import Searchbar from "./components/Searchbar";
import ReviewPage from "./components/ReviewPage";
import EditShowPage from "./components/EditShowPage";
import ShowsPage from "./components/ShowsPage";
import Login from "./components/Login";

const App = () => {
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Navbar token={token} isAdmin={isAdmin} />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showdetails/:showID" element={<ShowDetails />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/ShowsPage" element={<ShowsPage />}></Route>
        <Route path="/EditShowPage/:showID" element={<EditShowPage />}></Route>
        <Route path="/Profile" element={<ProfilePage token={token} />}></Route>
        <Route path="/Review/:reviewID" element={<ReviewPage />}></Route>
        {/* <Route path="/Register" element={<Register />}></Route> */}
        <Route
          path="/Login"
          element={
            <Login
              setToken={setToken}
              setUserID={setUserID}
              setIsAdmin={setIsAdmin}
            />
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
