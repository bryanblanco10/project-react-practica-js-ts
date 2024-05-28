import { Movie } from "./Movie"

export const ListMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.length === 0 && (
        <li>
          <h2>No se encontraron resultados</h2>
        </li>
      )}
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}