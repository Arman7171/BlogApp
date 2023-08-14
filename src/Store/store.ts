import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@features/Auth/authSlice'
import postsReducer from '@features/Posts/postsSlice'
import { enableMapSet } from "immer";

enableMapSet()
export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer
},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch