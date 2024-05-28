import { Card } from "./components/Card"
import { useFetchRepositories } from "./hooks/useRepos"
import { useFavoriteReposStore } from "./store/favoriteRepos"

function App() {
  const {data, isLoading } = useFetchRepositories('bryanblanco10')
  const { favoritesReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {data?.map(repo => (
        <Card key={repo.id} repository={repo} isFavorite={favoritesReposIds.includes(repo.id)} />
      ))}
    </>
  )
}

export default App
