import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

    const Admin = () => {
        const [shows, setShows] = useState([]);
        const ShowData = () => {
            useEffect(() => {
                const getShows = async () => {
                const response = await fetch('http://localhost:3000/api/shows')
                const data = await response.json()
                setShows(data)
                }
                getShows()
            }, []);
          }
        ShowData();

        const [users, setUsers] = useState([]);
        const UserData = () => {
            useEffect(() => {
                const getUsers = async () => {
                const response = await fetch('http://localhost:3000/api/users')
                const data = await response.json()
                setUsers(data)
                }
                getUsers()
            }, []);
          }
          UserData();

        const handleSubmit = (e) => {
            e.preventDefault();
            
            const url = '/api/shows/post';
            const body = {
            name: e.target[0].value,
            imageUrl: e.target[1].value,
            details: e.target[2].value
            };

            fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
        }
        
    return (
        <>
        <h2>Create New Show</h2>
        <form onSubmit={handleSubmit}>
            <label id="name">Name: <input></input></label>
            <br/>
            <label id="iamge">Iamge: <input></input></label>
            <br/>
            <label id="details">Details: <input></input></label>
            <br/>
            <button type="submit" >Submit</button>
        </form>


        <section>
            <h1>List of Shows</h1>
            <ul>
                {shows.map(show => (
                <li key={show.id}>
                <Link to={`/showdetails/${show.id}`}>{show.name}</Link>{' '}
                </li>
            ))}
             </ul>
        </section>

        <section>
            <h1>List of Users</h1>
            <ul>
                {users.map(user => (
                <li key={user.id}>
                <Link to={`/showdetails/${user.id}`}>{user.name}</Link>{' '}
                </li>
            ))}
             </ul>
        </section>
        </>
    )
    }
export default Admin;
