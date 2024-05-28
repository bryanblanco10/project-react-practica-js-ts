import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITE) as string)
    : initialState,
  reducers: {
    addFavorite: (_state, action) => {
      const newState : Person[] = action.payload
      setLocalStorage(LocalStorageTypes.FAVORITE, newState);

      return newState;
    },
    removeFavorite: (state, action) : Person[] => {
      const Oldstate : Person[] = current(state)
      const filteredState: Person[] = Oldstate.filter((item: Person) => item.id !== action.payload)
      setLocalStorage(LocalStorageTypes.FAVORITE, filteredState);
      return filteredState
    }
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
