import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [shows, setShows] = useState([]);
  const [users, setUsers] = useState([]);

//Gets Show List
  const ShowData = () => {
    useEffect(() => {
      const getShows = async () => {
        const response = await fetch("/api/shows");
        const data = await response.json();
        setShows(data);
      };
      getShows();
    }, []);
  };
  ShowData();

//Gets User List
  const UserData = () => {
    useEffect(() => {
      const getUsers = async () => {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      };
      getUsers();
    }, []);
  };
  UserData();

  //Create New Show
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "/api/shows/create";
    const body = {
      name: e.target[0].value,
      imageUrl: e.target[1].value,
      details: e.target[2].value,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };


  //Edit Show
  const handleEditClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  };


  //Delete Show
  const handleDeleteClick = async (e) => {
    e.preventDefault();
    console.log(e.target.id);

    const urlDelete = "/api/shows/delete";
    const body = {
      id: e.target.id,
    };
    await fetch(urlDelete, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };


  //HTML FOR ADMIN PAGE
  return (
    <>
      <h2>Create New Show</h2>
      <form onSubmit={handleSubmit}>
        <label id="name">
          Name: <input></input>
        </label>
        <br />
        <label id="iamge">
          Iamge: <input></input>
        </label>
        <br />
        <label id="details">
          Details: <input></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <section>
        <h1>List of Shows</h1>
            <ul>
            {shows.map((show) => (
                <li key={show.id}>
                <Link to={`/showdetails/${show.id}`}>{show.name}</Link>{" "}
                <button onClick={handleEditClick} id={show.id}>Edit</button>
                <button onClick={handleDeleteClick} id={show.id}> Delete</button>
                </li>
            ))}
            </ul>
      </section>

      <section>
        <h1>List of Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Admin;
