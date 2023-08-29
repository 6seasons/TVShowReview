import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [shows, setShows] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`hello`);
    const fetchShows = async () => {
      try {
        const response = await fetch("/api/shows");
        const data = await response.json();
        setShows(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShows();
  }, []);

  return (
    <>
      <section>
        <section>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search"
        />
        </section>
        {shows
          .filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((show) => {
            return (
              <>
                {input === "" ? null : (
                  <section key={show.id}>
                    <Link
                      to={`/showdetails/${show.id}`}
                      onClick={() => setInput("")}
                    >
                      {show.name}
                    </Link>
                  </section>
                )}
              </>
            );
          })}
      </section>
    </>
  );
};

export default Searchbar;
