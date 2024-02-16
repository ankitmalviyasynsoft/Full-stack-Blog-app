import React from 'react'
import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import { Page } from '@/types/Page.type'
import { stylePageSection } from '@/utils'
import config from '@/config/config.json'
import { GetServerSideProps } from 'next'
import moment from 'moment'
import { CategoryDTO } from '@/dtos/Category.dto'
import Image from 'next/image'


const BlogDetail: Page = ({ blogDetail }: any) => {
    const { data } = blogDetail

    return (
        <Container>
            <Stack my={stylePageSection}>
                {/* == Heading == */}
                <Stack alignItems='center' justifyContent='center'>
                    <Stack textAlign='center' maxWidth={800} alignItems='center' justifyContent='center' spacing={2}>
                        <Typography variant='body3'>Published {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
                        <Typography variant='h1'>{data?.title}</Typography>
                        <Typography variant='body2'>How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.</Typography>

                        <Stack direction='row' gap={2}>
                            {data?.categories?.map((item: CategoryDTO) => <Chip key={item.title} label={item.title} size="medium" variant="outlined" color='info' />)}

                        </Stack>
                    </Stack>
                </Stack>

                <Box height={{ xs: 1, md: 600 }} width={1} className='section-padding'>
                    <Image src={data?.profileURL} alt='blog detail' sizes="(min-width: 808px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                </Box>

                <Stack direction='row' justifyContent='center'>
                    <Stack maxWidth={800}>
                        <Box component='div' dangerouslySetInnerHTML={{ __html: data?.content }} />
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const response = await fetch(`${config.apiBaseUrl}/post/getPostById/${query.blogId}`)
    const blogDetail: any = await response.json();;
    return { props: { blogDetail } };
};


BlogDetail.layoutProps = {
    isProtectedPage: false,
    pageTypes: 'public',
    title: 'Detail'
}


export default BlogDetail