import { Page } from '@/types/Page.type'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useColumns } from './hooks/allBlogs.hook'
import { useLazyGetAllBlogsDataQuery } from '@/redux/api/blogPost.api'
import { Container, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'
import AlertBox from '@/components/_ui/alerts/AlertBox.components'



const Blog: Page = () => {
  const router = useRouter()
  const { columns } = useColumns()
  const paginationModel = { page: Number(router.query.page || 1) - 1, pageSize: 5 }
  const [getAllBlogsData, { data, isSuccess, isError, isLoading, isFetching, isUninitialized }] = useLazyGetAllBlogsDataQuery()

  console.log(data)

  const setPaginationModel = (page: number) => {
    router.push({ query: { page } }, undefined, { shallow: true })
  }

  useEffect(() => {
    getAllBlogsData({ page: (paginationModel.page + 1), perPage: paginationModel.pageSize })
  }, [paginationModel.page])


  if (isError) return <Container></Container>


  return (
    <Stack className='section-padding'>
      <Container>
        <PageHeader heading='All Blog' isButton buttonText='Add New Blog' callBack={() => router.push('/blog/create')} />
        <Stack>

          {/* == Table ==  */}
          {isError ? <AlertBox variant='error'>Something Went Wrong</AlertBox> :
            <DataGrid
              autoHeight
              rows={data?.posts && data?.posts?.map((item: any) => ({ id: item._id, ...item })) || []}
              columns={columns}
              rowCount={data?.totalPages || 0}
              loading={isUninitialized || isFetching}
              disableColumnMenu={true}
              rowSelection={false}
              paginationModel={paginationModel}
              onRowDoubleClick={(data) => router.push(`blog/detail/${data.id}`)}
              // disableRowSelectionOnClick={true}
              // onRowDoubleClick={({ row }) => handleDblClick(row)}
              slots={{
                pagination: () => (
                  <Pagination
                    page={paginationModel.page + 1}
                    onChange={(_, newPage) => setPaginationModel(newPage)}
                    count={data?.totalPages ? Math.ceil(Number(data?.totalPages)) : 0}
                    renderItem={(item) => <PaginationItem slots={{ previous: () => 'Prev', next: () => 'Next' }} {...item} />}
                  />
                ),
                noRowsOverlay: () => <Typography variant='body2' color='text.secondary' className='center' height={1}>No Blog found</Typography>

              }}
            />}
        </Stack>
      </Container >
    </Stack >
  )
}



Blog.layoutProps = {
  title: 'Blog',
  roles: ['admin'],
  pageTypes: 'authenticate',
  isProtectedPage: true,
}


export default Blog