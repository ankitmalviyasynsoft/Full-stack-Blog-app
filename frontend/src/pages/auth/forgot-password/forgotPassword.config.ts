import * as  yup from 'yup'



export const schema = yup.object({
  email: yup.string().trim().email().required(),
})


export type FormData = yup.InferType<typeof schema>