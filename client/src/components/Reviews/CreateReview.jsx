import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";


const CreateReview = ({ userID }) => {

  const navigate = useNavigate();

  const { showID } = useParams();

  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

  const createReviewHandler = async (e) => {
    userID ? null : navigate('/Login')
    e.preventDefault();
    const response = await fetch('/api/reviews/create', {
      method: "POST",
      body: JSON.stringify({
          user_id: userID,
          show_id: showID,
          rating: rating,
          content: content
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    navigate(`/showdetails/${showID}`)
  };

  return (
    <>
      { userID ? 
      <>
        <h1>create review for {showID}</h1>
        <form onSubmit={createReviewHandler}>
          <select required value={rating} onChange={e => setRating(e.target.value)}>
            <option value="" disabled selected>select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <textarea 
            name="message" 
            rows="10" 
            cols="20"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Create Review</button>
        </form>
      </>
       : <><p>Please</p><Link to='/Login'>Login</Link></>}
    </>
  );
};

export default CreateReview;
