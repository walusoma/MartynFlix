import MovieCard from "./MovieCard";
import movies from "../data/movies";
import "../styles/Movies.css";

function Movies() {
    return (
        <section className="movies">

            <h2>🔥 Featured Movies</h2>

            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>

        </section>
    );
}

export default Movies;