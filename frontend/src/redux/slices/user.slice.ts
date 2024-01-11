import { ProfileDTO } from '@/dtos/Profile.dto'
import { Roles } from '@/types/Roles.type'
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
      state.roles = action.payload.userRoles.map((item: any) => item.slug)
      state.profile = action.payload
      state.isLoggedIn = true
    },

  }
})


export const { updateProfile } = userSlice.actions