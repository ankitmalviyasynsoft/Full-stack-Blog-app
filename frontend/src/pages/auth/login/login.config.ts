import * as yup from 'yup'



export const schema = yup.object({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(8, 'Password must be eight digit').required()
})


export type FormData = yup.InferType<typeof schema>