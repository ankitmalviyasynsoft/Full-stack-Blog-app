import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stylePageSection, uniqueArrayElement } from '@/utils'
import { BlogFormProps } from './BlogForm.type'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSchemaType, formSchema } from './BlogForm.config'
import { Autocomplete, Box, Button, FormHelperText, Grid, InputLabel, Stack, TextField } from '@mui/material'
import ImageUpload from '@/components/_ui/imageUpload/ImageUpload.component'
import TextEditor from '@/components/textEditor/TextEditor.component'
import { useLazyGetAllCategoriesQuery } from '@/redux/api/category.api'
import { useCreateBlogPostMutation } from '@/redux/api/blogPost.api'
import { useReduxSelector } from '@/hooks/redux.hook'
import { useUploadFileMutation } from '@/redux/api/uploadFile.api'



export default function BlogForm(props: BlogFormProps) {
  const { mode, data } = props
  const [getAllCategories, { data: categories, isError, isLoading }] = useLazyGetAllCategoriesQuery()
  const { profile } = useReduxSelector(state => state.user)
  const [createBlogPost] = useCreateBlogPostMutation()
  const [uploadFile] = useUploadFileMutation()

  const { control, handleSubmit, setValue, watch, reset, trigger, formState: { errors } } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      image: undefined,
      category: [],
    }
  })


  useEffect(() => {
    getAllCategories({ page: 1, perPage: 1000 })
  }, [])


  const onSubmit = async (data: FormSchemaType) => {
    try {
      const formData = new FormData()
      formData.append('image', data.image)
      await uploadFile(formData as any).unwrap()
        .then((res: any) => {
          if (!!res?.imageUrl) {
            const FormData = {
              _id: profile._id,
              title: data.title,
              content: data.content,
              categories: data.category || [],
              userId: profile._id,
              profileURL: res.imageUrl
            }
            createBlogPost(FormData).unwrap()
          }
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
    catch (error) { console.error(error) }
    reset()
  }


  return (
    <Stack component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={4} my={stylePageSection}>
        <Grid container>
          {/* === Thumbnail Upload === */}
          <Grid item xs={12}>
            <ImageUpload
              defaultImage={watch('image') || data?.image}
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
            render={({ field: { value, onChange } }) => {
              return <Autocomplete
                multiple
                value={value}
                disableClearable
                options={categories?.data || []}
                loading={isLoading}
                disabled={isError}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField  {...params} placeholder='Select Category' error={!!errors.category} helperText={errors.category?.message || (isError && 'Sorry! Something went wrong')} />}
                onChange={(_, data: any) => {
                  onChange(uniqueArrayElement(data));
                  setValue("category", uniqueArrayElement(data));
                  trigger("category");
                }}
              />
            }
            }
          />
        </Stack>

        <Stack spacing={1}>
          <InputLabel>Description</InputLabel>
          <Controller name='content' control={control}
            render={({ fieldState: { error }, field }) =>
              <>
                <TextEditor {...field} placeholder='write your post content here' />
                {error?.message && <FormHelperText error>{error?.message}</FormHelperText>}
              </>
            }
          />
        </Stack>

        <Stack direction='row' justifyContent='end'>
          <Button variant='contained' type='submit' sx={{ minWidth: '20%' }}>Save</Button>
        </Stack>
      </Stack>
    </Stack>

  )
}
