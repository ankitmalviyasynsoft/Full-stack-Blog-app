import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material'
import { MdAccountCircle, MdCreate, MdLibraryAddCheck, MdOutlineHelp, MdLogout } from "react-icons/md";



export default function ProfileMenu() {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
        <Avatar sx={{ width: 52, height: 52 }} alt="Remy Sharp" src="/images/login.jpg">N</Avatar>
      </IconButton>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>

        {
          menuItems.map((item, index) => (
            <MenuItem onClick={handleClose}>
              <Button color='inherit' startIcon={item.icon} onClick={() => router.push(item.link)}>{item.name}</Button>
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
    link:'/'
  },
  {
    name: 'Create Post',
    icon: <MdCreate />,
    link:'/blog/create'
  },
  {
    name: 'Library',
    icon: <MdLibraryAddCheck />,
    link:'/'
  },
  {
    name: 'Help',
    icon: <MdOutlineHelp />,
    link:'/'
  },
  {
    name: 'Logout',
    icon: <MdLogout />,
    link:'/auth/login'
  },
]
