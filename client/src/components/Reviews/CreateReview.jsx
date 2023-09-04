import { useState } from "react";
import { useParams } from "react-router";


const CreateReview = () => {
  const { showID } = useParams();

  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

  const createReviewHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/reviews/create', {
      
    })
    console.log(rating, content);
  };

  return (
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
  );
};

export default CreateReview;
