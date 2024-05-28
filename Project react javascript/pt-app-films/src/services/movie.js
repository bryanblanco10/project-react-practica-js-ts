
const apiUrl = "https://www.omdbapi.com"
const apikey = "e5b3ef30"
export const search = async (value) => {
  if (value === "") return null
  try {
    const response = await fetch(
      `${apiUrl}/?apikey=${apikey}&s=${value}`
    );

    const { Search } = await response.json();
  
    if (Search) {
      return Search.map((movie => {
        return {
          title: movie?.Title,
          year: movie?.Year,
          poster: movie?.Poster,
          id: movie?.imdbID
        }
      }))
    }
  } catch (error) {
    throw new Error("Error searching movies")
  }
}