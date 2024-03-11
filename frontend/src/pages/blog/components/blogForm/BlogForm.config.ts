import { fileSizeTest } from '@/utils'
import * as yup from 'yup'



export const formSchema = yup.object({
  title: yup.string().trim().required().min(2).max(250),
  content: yup.string().trim().required(),
  category: yup.array().min(1).max(5),
  image: yup.mixed<File | string>().required().test('fileSize', 'File size can be up to {{size}}'.replace('{{size}}', '2MB'), value => fileSizeTest({ value, imageSize: 2 })),
})


export type FormSchemaType = yup.InferType<typeof formSchema>