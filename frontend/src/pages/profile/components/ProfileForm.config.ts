import * as yup from 'yup'



export const schema = yup.object({
  username: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  mobile: yup.string().trim().required(),
  // dob: yup.string().trim().required(),
  // country: yup.string().trim().required(),
  // state: yup.string().trim().required(),
  // city: yup.string().trim().required(),
  address: yup.string().trim().required(),
})


export type FormData = yup.InferType<typeof schema>