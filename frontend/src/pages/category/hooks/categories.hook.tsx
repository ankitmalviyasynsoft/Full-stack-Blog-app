import { Box, Chip, Stack, Typography } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import moment from 'moment'



export const useColumns = () => {


  const columns: GridColDef<any>[] = [
    {
      field: 'title', headerName: 'Category Name', flex: 2, minWidth: 200, renderCell: (params) => (
        <Stack>
          <Typography variant='body2'>{params.row?.title}</Typography>
        </Stack>
      )
    },
    {
      field: 'status', headerName: 'Category Status', flex: 1, minWidth: 130, renderCell: (params) => (
        <Typography>{params.row?.status ? 'Active' : 'In-Active'}</Typography>
      )
    },

    // { field: 'action', headerName: 'Action', width: 70, sortable: false, renderCell: (params) => <TableActions data={params.row} /> },
  ]


  return { columns }
}