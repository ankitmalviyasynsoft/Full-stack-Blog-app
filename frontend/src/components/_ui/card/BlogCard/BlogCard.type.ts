import { BlogPostDTO } from "@/dtos/BlogPost.dto"
import { CategoryDTO } from "@/dtos/Category.dto"



export type BlogCardProps = {
  style: {
    direction: 'row' | 'column'
    imageHeight?: number
    imageWidth?: number
    linkIcon?: boolean
  },
  data: {
    _id: string
    profileURL?: string
    content?: string
    title?: string
    createdAt?: string
    categories: CategoryDTO[]
  }
}