import { ProfileDTO } from '@/dtos/Profile.dto'
import { Roles } from '@/types/Roles.type'
import { removeCookie } from '@/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    roles: [] as Roles[],
    profile: {} as ProfileDTO,
    isLoggedIn: false
  },
  reducers: {

    updateProfile: (state, action: PayloadAction<ProfileDTO>) => {
      state.roles = action.payload.role.map((item: any) => item)
      state.profile = action.payload
      state.isLoggedIn = true
    },

    handleLogout: () => {
      removeCookie('token')
      window.location.href = '/'
    },

  }
})


export const { updateProfile, handleLogout } = userSlice.actions