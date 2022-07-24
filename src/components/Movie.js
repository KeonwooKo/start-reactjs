import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>
        <Link to={`/Movie/${id}`}>
          {title} (rating : {rating})
        </Link>
      </h1>
      <p>{summary}</p>
      {genres.map((g, index) => (
        <li key={index}>{g}</li>
      ))}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
