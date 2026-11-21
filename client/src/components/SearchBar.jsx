import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
    const [query, setQuery] = useState("");

    function handleSearch(event) {
        event.preventDefault();

        if (!query.trim()) return;

        alert(`Searching for: ${query}`);
    }

    return (
        <div className="search-container">
            <form
                className="search-form"
                onSubmit={handleSearch}
            >
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search movies or TV series..."
                    value={query}
                    onChange={(event) =>
                        setQuery(event.target.value)
                    }
                />

                <button
                    className="search-button"
                    type="submit"
                >
                    🔍 Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;