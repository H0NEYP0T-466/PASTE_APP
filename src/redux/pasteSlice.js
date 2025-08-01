import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes:localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      state.value += 1
    },
    updateToPaste: (state,action) => {
      state.value -= 1
    },
    removeFromPaste: (state, action) => {
      state.value += action.payload
    },
    resetAllPaste: (state, action) => {
      state.value += action.payload
    },
  },
})
export const { addToPaste, updateToPaste, removeFromPaste,resetAllPaste } = pasteSlice.actions

export default pasteSlice.reducer