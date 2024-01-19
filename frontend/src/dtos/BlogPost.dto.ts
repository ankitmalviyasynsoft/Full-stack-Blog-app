import { CategoryDTO } from "./Category.dto";


export type BlogPostDTO = {
  _id: string;
  title: string;
  content: string;
  profileURL?: string;
  categories: CategoryDTO[];
  userId?: string;
  __v?: number;
}


export type ApiResponseDTO = {
  page: number;
  perPage: number;
  totalPages: number;
  totalPosts: number;
  posts: BlogPostDTO[];
}