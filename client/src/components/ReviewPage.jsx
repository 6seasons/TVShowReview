import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ReviewPage = () => {
  const [review, setReview] = useState();

  const { reviewID } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/api/reviews/${reviewID}`);
        const data = await response.json();
        setReview(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, [reviewID]);

  return (
    <>
      {!review ? null :
        <section>
          <section>
            <section>
              <img src={review.show.imageUrl} />
            </section>
            <p>{review.user.image}</p>
            <h2>{review.user.username}</h2>
            <h3>{review.rating}</h3>
            <p>{review.content}</p>
          </section>
          <section>
            {review.comments.map(comment => {
              return (
                <>
                  <h3>{comment.user.username}</h3>
                  <p>{comment.content}</p>
                </>
              )
            })}
          </section>
        </section>

      }
    </>
  );
};

export default ReviewPage;
