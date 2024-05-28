import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isVisible: boolean
}
const initialState: InitialState = {
  isVisible: false
}

const layoutSlice = createSlice({
  name: 'searchVideosApp',
  initialState,
  reducers: {
    updateIsVisible: (state) => {
      state.isVisible = !state.isVisible
    },
    updateIsVisibleByScreen: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    }
  }
})

export const { updateIsVisible, updateIsVisibleByScreen } = layoutSlice.actions
export default layoutSlice.reducer
