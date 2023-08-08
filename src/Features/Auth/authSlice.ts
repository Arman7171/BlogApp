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
      logout: (state) => {
        console.log('asd');
        Cookies.remove('token')
        state.token = null
      }
    },
  })

export const { login, logout } = authSlice.actions

export default authSlice.reducer