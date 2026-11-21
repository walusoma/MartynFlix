import "../styles/Categories.css";

const categories = [
    "🔥 Trending",
    "🎬 Action",
    "😂 Comedy",
    "❤️ Romance",
    "👻 Horror",
    "🚀 Sci-Fi",
    "🐉 Adventure",
    "🎌 Anime",
    "📺 TV Series",
    "⭐ New Releases",
];

function Categories() {
    return (
        <section className="categories">
            <h2>Browse by Category</h2>

            <div className="category-list">
                {categories.map((category, index) => (
                    <button key={index} className="category-btn">
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Categories;