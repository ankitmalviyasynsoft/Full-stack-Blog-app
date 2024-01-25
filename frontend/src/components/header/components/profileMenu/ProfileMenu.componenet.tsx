import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { MdAccountCircle, MdCreate, MdLibraryAddCheck, MdOutlineHelp, MdLogout } from "react-icons/md";
import { handleLogout } from '@/redux/slices/user.slice';
import { useReduxDispatch } from '@/hooks/redux.hook';



export default function ProfileMenu() {
  const router = useRouter()
  const dispatch = useReduxDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  return (
    <>
      <IconButton id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        <Avatar sx={{ width: 52, height: 52 }} alt="Remy Sharp" src="/images/login.jpg">UN</Avatar>
      </IconButton>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
        {
          menuItems.map((item, index) => (
            <MenuItem onClick={(event) => {
              if (item.name === 'Logout') dispatch(handleLogout());
              else router.push(item.link);
              handleClose();
            }} key={index}>
              <Stack direction='row' justifyContent='space-between' alignItems='center' p={.5} gap={2}>
                <Box display='flex' fontSize={24}>{item.icon}</Box>
                <Typography variant='body1'>{item.name}</Typography>
              </Stack>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )
}




let menuItems = [
  {
    name: 'My Profile',
    icon: <MdAccountCircle />,
    link: '/profile',
    role: ['user', 'admin']
  },
  {
    name: 'Create Post',
    icon: <MdCreate />,
    link: '/blog/create',
    role: ['user', 'admin']
  },
  {
    name: 'Category',
    icon: <MdLibraryAddCheck />,
    link: '/category',
    role: ['user', 'admin']
  },
  {
    name: 'Library',
    icon: <MdLibraryAddCheck />,
    link: '/',
    role: ['user', 'admin']
  },
  {
    name: 'Help',
    icon: <MdOutlineHelp />,
    link: '/',
    role: ['user', 'admin']
  },
  {
    name: 'Logout',
    icon: <MdLogout />,
    link: '/auth/login'
  },
]
