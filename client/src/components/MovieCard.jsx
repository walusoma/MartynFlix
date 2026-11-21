import "../styles/MovieCard.css";

function MovieCard({ movie }) {
    return (
        <article className="movie-card">

            <div className="poster-container">

                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                />

                <span className="quality-badge">
                    {movie.quality}
                </span>

                <span className="rating-badge">
                    ⭐ {movie.rating}
                </span>

            </div>

            <div className="movie-info">

                <h3 className="movie-title">
                    {movie.title}
                </h3>

                <div className="movie-meta">

                    <span>📅 {movie.year}</span>

                    <span>🎭 {movie.genre}</span>

                </div>

                <div className="movie-size">

                    📦 {movie.size}

                </div>

                <button className="download-btn">

                    ⬇ Download

                </button>

            </div>

        </article>
    );
}

export default MovieCard;