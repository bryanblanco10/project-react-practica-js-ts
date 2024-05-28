import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (_state, action) : Person[] => {
      const newState : Person[] =  action.payload;
      setLocalStorage(LocalStorageTypes.PEOPLE, newState);

      return newState
    },
  },
});

export const { addPeople } = peopleSlice.actions;