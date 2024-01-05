import * as yup from 'yup'



export const schema = yup.object({
  password: yup.string().trim().min(8, 'Password must be eight digit').required(),
  confirmPassword: yup.string().trim().min(8, 'Password must be eight digit').required()
})


export type FormData = yup.InferType<typeof schema>