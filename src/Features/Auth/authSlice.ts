import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export type authState = {
    token: string | null
  }
  
  const initialState: authState = {
    token: Cookies.get('token') || null
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.token = action.payload
      },
    },
  })

export const { login } = authSlice.actions

export default authSlice.reducer