import { create } from "zustand";
import { persist } from "zustand/middleware";
type favoriteReposState = {
  favoritesReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<favoriteReposState>(
    (set) => ({
      favoritesReposIds: [],
      addFavoriteRepo: (id: number) =>
        set((state) => ({ favoritesReposIds: [...state.favoritesReposIds, id] })),
      removeFavoriteRepo: (id: number) =>
        set((state) => ({
          favoritesReposIds: state.favoritesReposIds.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: 'favorite-repos',
    }
  ),
);
