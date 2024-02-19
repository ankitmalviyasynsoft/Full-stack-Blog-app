import { Roles } from "@/types/Roles.type"


export type ProfileDTO = {
  _id: string
  email: string
  username: string
  mobile?: string
  address?: string
  country?: string
  state?: string
  city?: string
  zip?: number
  dob?: string
  profileUrl?: string
  isVerified?: boolean
  role: Roles[],
  isProfileCompleted?: boolean
  createdAt: string
  updatedAt: string
}
