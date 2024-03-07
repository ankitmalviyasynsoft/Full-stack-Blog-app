import * as yup from 'yup'



export const formSchema = yup.object({
  title: yup.string().trim().required().min(2).max(250),
  status: yup.boolean().required()
})


export type FormSchemaType = yup.InferType<typeof formSchema>