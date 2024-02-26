import TableActions from '@/components/tableAction/TableActions.component'
import { useDeleteBlogPostMutation } from '@/redux/api/blogPost.api'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import moment from 'moment'



export const useColumns = () => {

  const [deleteBlogPost, { isLoading: isDeleting }] = useDeleteBlogPostMutation()

  const handleRemoveRow = (data: any) => {
    console.log('hello delete ', data)
    deleteBlogPost(data._id)
  }


  const columns: GridColDef<any>[] = [
    {
      field: 'title', headerName: 'Blog Name', flex: 2, minWidth: 200, renderCell: (params) => (
        <Stack>
          <Typography variant='body2'>{params.row?.title}</Typography>
        </Stack>
      )
    },
    {
      field: 'createdAt', headerName: 'Created At', flex: 1, minWidth: 130, renderCell: (params) => (
        <Typography>{moment(params.row?.createdAt).format('LL')}</Typography>
      )
    },

    { field: 'action', headerName: 'Action', width: 70, sortable: false, renderCell: (params) => <TableActions data={params.row} editUrl={`/blog/edit/${params.row.id}`} deleteCallBack={handleRemoveRow} /> },
  ]


  return { columns }
}