import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    showThankYouPage: false
  },
  reducers: {
    handleThankYouPage: (state, action: PayloadAction<boolean>) => {
      state.showThankYouPage = action.payload
    }
  }
})


export const { handleThankYouPage } = pageSlice.actions