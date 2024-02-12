import React from 'react'
import { CategoryFormProps } from './CategoryForm.type'
import { Box, Button, Checkbox, FormControlLabel, InputLabel, Stack, TextField } from '@mui/material'
import { stylePageSection } from '@/utils'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaType, formSchema } from './CategoryForm.config'
import { useCreateCategoryMutation, useUpdateCategoryMutation } from '@/redux/api/category.api'
import { useRouter } from 'next/router'



const CategoryForm = (props: CategoryFormProps) => {
  const { mode, data } = props
  const router = useRouter()

  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()
  const { control, handleSubmit, setValue, watch, reset, trigger, formState: { errors } } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: mode == 'edit' ? data?.title || '' : '',
      status: mode == 'edit' ? data?.status || false : '',
    }
  })


  const onSubmit = async (data: FormSchemaType) => {
    try {
      if (mode === 'add') await createCategory(data)
      else if (mode === 'edit') {
        await updateCategory({ id: router?.query?.slug as string, ...data })
        router.push('/category')
      }
    }
    catch (error) { console.error(error) }
  }


  return (
    <Stack component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={4} my={stylePageSection}>
        <Stack spacing={1}>
          <InputLabel>Category Name</InputLabel>
          <Controller name='title' control={control}
            render={({ field }) =>
              <TextField {...field} variant='outlined' placeholder='Enter Category Name' error={!!errors.title?.message} helperText={errors.title?.message} />
            }
          />
        </Stack>
        <Stack spacing={1}>
          <Controller name="status" control={control}
            render={({ field: { onChange, value } }) => (
              <FormControlLabel control={<Checkbox checked={value} onChange={onChange} />} label="Is Active" />)}
          />
        </Stack>

        <Stack direction='row' justifyContent='end'>
          <Button variant='contained' type='submit' sx={{ minWidth: '20%' }}>Save</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default CategoryForm
