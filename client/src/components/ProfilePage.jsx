import { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("/api/users/me", {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjkzMjUzODQ2fQ.YqPeizl7Q61p9L71n0T47_Gic7ldE4jFkwKhj-x_X3A",
        },
      });
      const data = await response.json();
      setUser(data);
      setReviews(data.reviews);
      setComments(data.comments);
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
              return (
                <section>
                  <h2>{review.show.name}</h2>
                  <h3>{review.rating}</h3>
                  <p>{review.content}</p>
                </section>
              );
            })}
          </section>
          <section>
            <h3>Comments</h3>
            {comments.map((comment) => {
              return (
                <section>
                  <p>{comment.content}</p>
                </section>
              );
            })}
          </section>
        </section>
      ) : null}
    </>
  );
};

export default ProfilePage;
