import { Autocomplete, IconButton, Button, InputAdornment, Stack, TextField } from '@mui/material'
import { MdOutlineSearch } from "react-icons/md";
import { useRouter } from 'next/router';
import { style } from './Header.style';
import React from 'react'



export default function Header() {
const router = useRouter()

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' py={2} height={80}>
      <Stack flex={1}>LOGO</Stack>

      <Stack flex={2}>
        <Autocomplete
          sx={style.autoCompleteSearch}
          disableClearable
          options={[]}
          loading={false}
          disabled={false}
          // getOptionLabel={(option) => option?.name}
          // isOptionEqualToValue={(option, value) => option.name === value.name}
          renderInput={(params) => <TextField  {...params} variant='outlined'
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <MdOutlineSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />}
          onChange={(_, data) => {
            // field.onChange(data)
            // setValue('categoryId', data._id)
            // trigger('categoryId')
          }}
        />
      </Stack>

      <Stack flex={1} direction='row' justifyContent='end' alignItems='center' gap={2}>
        <Button variant='outlined' onClick={()=> router.push('/auth/login')}>Login</Button>
        <Button variant='contained'  onClick={()=> router.push('/auth/register')}> Sign Up</Button>
      </Stack>
    </Stack>
  )
}
