import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api.config'
import { layoutSlice } from '../slices/layout.slice'
import { userSlice } from '../slices/user.slice'
import { rtkQueryLogger } from '../api/api.util'
import { pageSlice } from '../slices/page.slice'
import blogPostSlice from '../slices/blogPost.slice'



export const store = configureStore({
  reducer: {
    [blogPostSlice.name]: blogPostSlice.reducer,
    [layoutSlice.name]: layoutSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [pageSlice.name]: pageSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => [rtkQueryLogger, ...getDefaultMiddleware().concat(api.middleware)],
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch