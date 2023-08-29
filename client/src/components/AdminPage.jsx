import {useEffect, useState} from "react";

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

        const [reviews, setReviews] = useState([]);
        const ReviewData = () => {
            useEffect(() => {
                const getShows = async () => {
                const response = await fetch('http://localhost:3000/api/reviews')
                const data = await response.json()
                setReviews(data)
                }
                getShows()
            }, []);
          }
          ReviewData();

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('yay')
        }
        
    return (
        <>
        <h2>Create New Show</h2>
        <form onSubmit={handleSubmit}>
            <label>Name: <input></input></label>
            <br/>
            <label>Iamge: <input></input></label>
            <br/>
            <label>Details: <input></input></label>
            <br/>
            <button type="submit" >Submit</button>
        </form>


        <section>
            <h1>List of Shows</h1>
            <ul>
                {shows.map(show => (
                <li key={show.id}>
                <a href={`http://localhost:3000/api/shows/${show.id}`}>{show.name}</a>
                </li>
            ))}
             </ul>
        </section>

        <section>
            <h1>List of Reviews</h1>
            <ul>
                {reviews.map(review => (
                <li key={review.id}>
                <a href={`http://localhost:3000/api/reviews/${review.id}`}>{review.id}</a>
                </li>
            ))}
             </ul>
        </section>
        </>
    )
    }
export default Admin;
