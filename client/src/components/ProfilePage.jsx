import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/users/me", {
          headers: {
            "Content-Type": "application/json",
            authorization: import.meta.env.VITE_TOKEN,
          },
        });
        const data = await response.json();
        setUser(data);
        setReviews(data.reviews);
        setComments(data.comments);
      } catch (err) {
        console.log(err)
      }
    };
    fetchProfile();
  }, []);
  
  return (
    <>
      {user ? (
        <section>
          <section>
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
          </section>
          <section>
            <h3>Reviews</h3>
            {reviews.map((review) => {
              const reviewURL = `/Review/${review.id}`;
              return (
                <Link to={reviewURL}>
                  <section>
                    <h2>{review.show.name}</h2>
                    <h3>{review.rating}</h3>
                    <p>{review.content}</p>
                  </section>
                </Link>
              );
            })}
          </section>
          <section>
            <h3>Comments</h3>
            {comments.map((comment) => {
              const reviewURL = `/Review/${comment.review_id}`;
              return (
                <Link to={reviewURL}>
                  <section>
                    <p>{comment.content}</p>
                  </section>
                </ Link>
              );
            })}
          </section>
        </section>
      ) : null}
    </>
  );
};

export default ProfilePage;
