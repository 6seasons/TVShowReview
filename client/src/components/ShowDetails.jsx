import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
  const { showID } = useParams();

  const [show, setShow] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`/api/shows/${showID}`);
        const data = await response.json();
        setShow(data.show);
        setReviews(data.reviews);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [showID]);

  console.log(show);
  console.log(reviews);

  return (
    <>
      {show ?
      <section>
        <h1>{show.name}</h1>
        <img src={show.imageUrl} />
        <p>{show.details}</p>
      </section> :
      null
      }
      {reviews.map(review => {
        return (
          <>
            <section>
              <h3>{review.user.username}</h3>
              <h1>{review.rating}</h1>
              <p>{review.content ? review.content : null}</p>
            </section>
          </>
        );
      })}
    </>
  );
};

export default ShowDetails;
