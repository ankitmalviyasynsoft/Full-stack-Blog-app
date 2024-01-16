import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stylePageSection } from '@/utils'
import { BlogFormProps } from './BlogForm.type'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaType, formSchema } from './BlogForm.config'
import { Autocomplete, Box, Button, Grid, InputLabel, Stack, TextField } from '@mui/material'
import ImageUpload from '@/components/_ui/imageUpload/ImageUpload.component'
import TextEditor from '@/components/textEditor/TextEditor.component'
import { useGetAllCategoriesQuery } from '@/redux/api/category.api'
import { CategoryDTO } from '@/dtos/Profile.dto'
import { useCreateBlogPostMutation } from '@/redux/api/post.api'
import { useReduxSelector } from '@/hooks/redux.hook'



export default function BlogForm(props: BlogFormProps) {
  const { mode, data } = props
  const categories = useGetAllCategoriesQuery('')
  const { profile } = useReduxSelector(state => state.user)
  const [createBlogPost] = useCreateBlogPostMutation()

  const { control, handleSubmit, setValue, trigger, formState: { isSubmitting, errors } } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
  })


  const onSubmit = async (data: FormSchemaType) => {
    try {

      // const formData = new FormData()
      // formData.append('image', data.image)
      // await uploadImage(formData as any).unwrap()
      //   .then((res) => {
      //     const FormData = {
      //       title: data.title,
      //       content: data.content,
      //       categories: data.category || [],
      //       userId: profile._id,
      //       profileURL: res.data
      //     }
      //     console.log(FormData)
      //     // createBlogPost(FormData)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })


    }
    catch (error) { console.error(error) }
  }

  return (
    <Stack component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={4} my={stylePageSection}>
        <Grid container>
          {/* === Thumbnail Upload === */}
          <Grid item xs={12}>
            <ImageUpload
              defaultImage={data?.image}
              helperText={errors.image?.message}
              onChange={(file) => {
                setValue('image', file)
                trigger('image')
              }}
            />
          </Grid>
        </Grid>

        <Stack spacing={1}>
          <InputLabel>New Post Title</InputLabel>
          <Controller name='title' control={control}
            render={({ field }) =>
              <TextField {...field} variant='outlined' placeholder='New post title here' error={!!errors.title?.message} helperText={errors.title?.message} />
            }
          />
        </Stack>
        <Stack spacing={1}>
          <InputLabel>Category</InputLabel>
          <Controller name='category' control={control}
            render={({ field: { value, onChange } }) =>
              <Autocomplete
                multiple
                value={value}
                disableClearable
                options={categories.data || []}
                loading={categories.isLoading}
                disabled={categories.isError}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField  {...params} placeholder='Select Category' error={!!errors.category} helperText={errors.category?.message || (categories.isError && 'Sorry! Something went wrong')} />}
                onChange={(_, data: any) => {
                  onChange(data);
                  setValue("category", data);
                  trigger("category");
                }}
              />
            }
          />
        </Stack>

        <Stack spacing={1}>
          <InputLabel>Description</InputLabel>
          <Controller name='content' control={control}
            render={({ field }) =>
              <TextEditor {...field} placeholder='write your post content here' />
            }
          />
        </Stack>

        <Stack direction='row' justifyContent='end'>
          <Button variant='outlined' type='submit' sx={{ minWidth: '20%' }}>Save</Button>
        </Stack>
      </Stack>
    </Stack>

  )
}
