import { useState, useEffect } from "react";

const ShowDetails = () => {

  const [show, setShow] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch('/api/shows/5');
        const data = await response.json();
        console.log(data.show);
        console.log(data.reviews);
        setShow(data.show);
        setReviews(data.reviews);
      } catch (err) {
        console.log(err)
      }
    }
    fetchShow();
  }, [])

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default ShowDetails;
