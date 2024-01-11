import { Roles } from "@/types/Roles.type"


export type ProfileDTO = {
  _id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  address?: string
  country?: string
  state?: string
  city?: string
  zip?: number
  dob?: string
  profileUrl?: string
  isVerified?: boolean
  userRoles: {
    name?: string
    slug?: Roles
  }[]
  isProfileCompleted?: boolean
  createdAt: string
  updatedAt: string
}


interface profileDocument {
  imageURL?: string
  name?: string
}
