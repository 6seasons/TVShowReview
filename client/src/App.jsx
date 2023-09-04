import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ShowDetails from "./components/Shows/ShowDetails";
import Admin from "./components/Admin/AdminPage";
import ProfilePage from "./components/ProfilePage";
import Searchbar from "./components/Searchbar";
import ReviewPage from "./components/Reviews/ReviewPage";
import EditShowPage from "./components/Admin/EditShowPage";
import ShowsPage from "./components/Shows/ShowsPage";
import Login from "./components/Login";
import CreateReview from "./components/Reviews/CreateReview"

const App = () => {
  const [token, setToken] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Navbar 
        token={token} 
        setToken={setToken}
        isAdmin={isAdmin} 
        setIsAdmin={setIsAdmin}
        setUserID={setUserID}
      />
      <Searchbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/showdetails/:showID" element={<ShowDetails />}></Route>
        <Route path="/showdetails/:showID/CreateReview" element={<CreateReview />}></Route>
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
