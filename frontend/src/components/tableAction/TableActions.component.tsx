import { useState } from 'react'
import { style } from './TableActions.style'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material'
import { MdMoreHoriz, MdEdit, MdClose } from 'react-icons/md'
import Link from 'next/link'



export default function TableActions({ data }: { data: any }) {
  const [showMenu, setShowMenu] = useState(false)
  // const [showCancelInvestmentPoup, setShowCancelInvestmentPoup] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const canTradeCancel = (['CREATED', 'FUNDED'] as any).includes(data.orderStatus)


  const handleOpen = (value: boolean) => (event: React.MouseEvent<HTMLElement>) => {
    setShowMenu(value)
    setAnchorEl(event.currentTarget)
  }


  const handleDeleteRecord = () => {
    // if (canTradeCancel) {
    //   setShowMenu(false)
    //   setShowCancelInvestmentPoup(true)
    // }

    console.log('hello delete')
  }


  return (
    <Stack className='center' width={1}>

      {/* === More Button === */}
      <IconButton sx={style.moreButton} onClick={handleOpen(true)}>
        <MdMoreHoriz />
      </IconButton>


      {/* === Dropdown Menu === */}
      <Menu anchorEl={anchorEl} open={showMenu} onClose={handleOpen(false)}>
        <MenuItem onClick={handleOpen(false)} component={Link} href={`/category/edit/${data._id}`}>
          <ListItemIcon sx={style.menuIcon}><MdEdit /></ListItemIcon>
          <ListItemText sx={style.menuText} disableTypography>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDeleteRecord} sx={style.deleteMenu}>
          <ListItemIcon sx={style.menuIcon}><MdClose /></ListItemIcon>
          <ListItemText sx={style.menuText} disableTypography>Remove</ListItemText>
        </MenuItem>
      </Menu>


      {/* === Delete Popup === */}
      {/* <CancelInvestmentPopup
        open={showCancelInvestmentPoup}
        setOpen={setShowCancelInvestmentPoup}
        data={data}
      /> */}

    </Stack>
  )
}