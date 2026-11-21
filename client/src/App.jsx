import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <Movies />
    </>
  );
}

export default App;