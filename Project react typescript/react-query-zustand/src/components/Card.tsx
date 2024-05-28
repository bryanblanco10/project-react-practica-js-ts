import { Repository } from "../hooks/types"
import { useFavoriteReposStore } from "../store/favoriteRepos"

interface Props {
  repository: Repository
  isFavorite: boolean
}
export const Card = ({ repository, isFavorite}: Props) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore()

  const togleFavorite = () => {
    if (isFavorite) {
      return removeFavoriteRepo(repository.id)
    }

    addFavoriteRepo(repository.id)
  }
  return (
    <div>
      <h1>{repository?.name}</h1>
      <button onClick={togleFavorite}>{isFavorite ? 'dislike' : 'Like'}</button>
    </div>
  )
}