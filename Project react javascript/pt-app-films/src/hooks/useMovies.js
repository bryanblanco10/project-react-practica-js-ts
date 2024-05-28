import { useCallback, useMemo, useState } from "react";
import { search } from "../services/movie";

export const useMovies = ({ sort }) => {
  const [movies, SetMovies] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const [error, setError] = useState(null)

  const searchMovie = useCallback( async (query) => {
    SetMovies([]);
    setError("")

    try {
      setSearching(true);
      const movies = await search(query)
      //Mapear los datos
      if (movies) {
        SetMovies(movies);
      } else {
        setError("Error al buscar pelicula") 
      }
    } catch (error) {
      setError("Error al buscar pelicula") 
    } finally {
      setSearching(false);
    }
  }, [search])

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  

  return {
    movies: sortedMovies,
    isSearching,
    setError,
    error,
    searchMovie,
  }
}