import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    isWebsiteLoading: true,
  },
  reducers: {

    handleWebsiteLoader: (state, action: PayloadAction<boolean>) => {
      state.isWebsiteLoading = action.payload
    }

  }
})


export const { handleWebsiteLoader } = layoutSlice.actions