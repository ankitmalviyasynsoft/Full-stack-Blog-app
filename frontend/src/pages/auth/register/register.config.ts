import * as yup from 'yup'



export const schema = yup.object({
  username: yup.string().trim().required().min(3, 'Name must be atleast 3 character').max(100),
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(8, 'Password must be eight digit').required()
})


export type FormData = yup.InferType<typeof schema>