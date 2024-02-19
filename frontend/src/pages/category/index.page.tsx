import PageHeader from '@/components/_ui/pageHeader/PageHeader.components'
import { useLazyGetAllCategoriesQuery } from '@/redux/api/category.api'
import { Page } from '@/types/Page.type'
import { Box, Button, Container, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useColumns } from './hooks/categories.hook'



const Categories: Page = () => {
  const router = useRouter()
  const { columns } = useColumns()
  const paginationModel = { page: Number(router.query.page || 1) - 1, pageSize: 5 }
  const [getAllCategories, { data, isSuccess, isError, isFetching, isUninitialized }] = useLazyGetAllCategoriesQuery()

  console.log(data)

  const setPaginationModel = (page: number) => {
    router.push({ query: { page } }, undefined, { shallow: true })
  }

  useEffect(() => {
    getAllCategories({ page: (paginationModel.page + 1), perPage: paginationModel.pageSize })
  }, [paginationModel.page])


  const handleDblClick = (row: any) => {
    router.push(`/`)
  }


  return (
    <Container>
      <Stack className='section-padding'>
        <PageHeader heading='All Categories' isButton buttonText='Add Category' callBack={() => router.push('/category/add')} />

        <Stack>
          {/* === Table === */}
          <DataGrid
            rows={data?.data && data?.data?.map((item: any) => ({ id: item._id, ...item })) || []}
            columns={columns}
            rowCount={data?.data?.length || 0}
            loading={isUninitialized || isFetching}
            disableColumnMenu={true}
            rowSelection={false}
            paginationModel={paginationModel}
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
              noRowsOverlay: () => <Typography variant='body2' color='text.secondary' className='center' height={1}>No Category found</Typography>
            }}
          />
        </Stack>
      </Stack>
    </Container>
  )
}

Categories.layoutProps = {
  title: 'Categories',
  roles: ['admin'],
  pageTypes: 'authenticate',
  isProtectedPage: true
}

export default Categories
