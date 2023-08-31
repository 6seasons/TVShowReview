import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditShowPage = () => {
  const { showID } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`/api/shows/${showID}`);
        const data = await response.json();
        setShow(data.show);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [showID]);

  const submitHandler = (e) => {
    e.preventDefault()
    if(show.name === e.target[0].value && show.imageUrl === e.target[1].value && show.details === e.target[2].value){
        
     console.log('no change')
    } else {
      const url = `/api/shows/EditShowPage/Edit/${show.id}`;
      const body = {
      name: e.target[0].value,
      imageUrl: e.target[1].value,
      details: e.target[2].value,
    };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    }
    window.location.reload();

  }

  return (
    <>
      {show ?
      <section>
        <h1>Edit the show below</h1>
        <form onSubmit={submitHandler}>
          <label>Name: <input defaultValue={show.name} type="text"></input></label>
          <br/>
          <label>Image: <input defaultValue={show.imageUrl} type="text"></input></label>
          <br/>
          <label>Details: <input defaultValue={show.details} type="text"></input></label>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </section> :
      null
      }
    </>
  );
};

export default EditShowPage;