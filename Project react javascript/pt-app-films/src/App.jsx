import { useCallback, useState } from "react";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { ListMovies } from "./components/ListMovies";
import debounce from "just-debounce-it";



function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(false);
  // const inputRef = useRef();
  const {
    movies,
    isSearching,
    error,
    setError,
    searchMovie,
  } = useMovies({ sort })

  const debouncendSearchMovies = useCallback(
    debounce(search => {
      searchMovie(search);
    }, 300), []
  )
  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    if (value === "") {
      setError("No se puede buscar una pelicula vacia");
      return
    }

    if (value.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número")
      return 
    }

    if (value.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres")
      return
    }

    setError(null)
    debouncendSearchMovies(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // // const value = inputRef.current.value;
    // const { query } = Object.fromEntries(new window.FormData(event.target));
    // //Aqui se pueden hacer validaciones
    searchMovie(query);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.checked)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" name="query" value={query} onChange={handleChange} />
          <input type="checkbox" checked={sort} onChange={handleChangeSort} />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {isSearching && <p>Buscando...</p>}
        {!isSearching && error && <p>{ error }</p>}
        {!isSearching && !error && <ListMovies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
