export interface CardProps {
  style: {
    direction: 'row' | 'column'
    imageHeight?: number
    imageWidth?: number
    linkIcon?: boolean
  }
  imageLink?: string
  title?: string
  description?: string
  publishDate?: string

}