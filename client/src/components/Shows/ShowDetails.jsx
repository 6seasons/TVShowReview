import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ShowDetails = ({ token }) => {
  const { showID } = useParams();

  const [show, setShow] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [avg, setAvg] = useState(null);

  
  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`/api/shows/${showID}`);
        const data = await response.json();
        setShow(data.show);
        setReviews(data.reviews);
        setAvg(data.aggregations);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [showID]);
  
  const createReviewUrl = `/showdetails/${showID}/CreateReview`

  return (
    <>
      {show ? (
        <section>
          {!token? null : <Link to={createReviewUrl}>Create Review</Link>}
          <h1>{show.name}</h1>
          <img src={show.imageUrl} />
          <p>{show.details}</p>
          <h3>{avg._avg.rating.toFixed(1)}</h3>
        </section>
      ) : null}
      {reviews.map((review) => {
        const reviewURL = `/Review/${review.id}`;
        return (
          <>
            <section>
              <Link to={reviewURL}>
                <h3>{review.user.username}</h3>
                <h1>{review.rating}</h1>
                <p>{review.content ? review.content : null}</p>
              </Link>
            </section>
          </>
        );
      })}
    </>
  );
};

export default ShowDetails;
