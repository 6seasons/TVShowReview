import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ReviewPage = () => {
  const [review, setReview] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/api/reviews/${id}`);
        const data = await response.json();
        setReview(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, []);

  return (
    <>
      <h1>{review ? review.user.username : null}</h1>
    </>
  );
};

export default ReviewPage;
