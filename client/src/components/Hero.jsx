import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-badge">
                    🎬 Welcome to MartynFlix
                </span>

                <h1>
                    Download Your Favorite
                    <span> Movies </span>
                    Anytime
                </h1>

                <p>
                    Discover thousands of movies and TV series.
                    Choose your preferred quality and download
                    quickly with a clean and simple experience.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                        ⬇ Start Downloading
                    </button>

                    <button className="secondary-btn">
                        🎥 Explore Library
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Hero;