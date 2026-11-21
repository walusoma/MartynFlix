import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">
                ▶ Martyn<span>Flix</span>
            </h1>

            <ul className="nav-links">
                <li>Home</li>
                <li>Movies</li>
                <li>TV Series</li>
                <li>Categories</li>
                <li>About</li>
            </ul>

            <button className="search-btn">🔍 Search</button>
        </nav>
    );
}

export default Navbar;