import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [Loading, setLoading] = useState(true);
  const [Movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {Loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h1>
            {Movie.title} ({Movie.rating})
          </h1>
          <img src={Movie.medium_cover_image} />
          <p>{Movie.description_intro}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
