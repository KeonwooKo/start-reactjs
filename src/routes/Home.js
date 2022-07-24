import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [Loading, setLoading] = useState(true);
  const [Movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>ko`s movie {Loading ? "" : `(${Movies.length})`}</h1>
      {Loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {Movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
