export const Movie = ({ movie }) => {
  return (
    <li className="movie">
      <img src={movie?.poster} alt={movie?.title} />
      <h1>{movie?.title}</h1>
      <h2>{movie?.year}</h2>
    </li>
  )
}