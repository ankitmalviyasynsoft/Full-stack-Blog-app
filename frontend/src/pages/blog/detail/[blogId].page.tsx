import React, { useEffect } from 'react'
import { Box, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import { Page } from '@/types/Page.type'
import { stylePageSection } from '@/utils'
import { GetServerSideProps } from 'next'
import { CategoryDTO } from '@/dtos/Category.dto'
import { useLazyGetSimilarPostsByCategoryTitleQuery } from '@/redux/api/blogPost.api'
import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import config from '@/config/config.json'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'


const BlogDetail: Page = ({ blogDetail, metaTags }: any) => {
    const { data } = blogDetail
    let [getSimilarPostsByCategoryTitle, { data: similarPostData }] = useLazyGetSimilarPostsByCategoryTitleQuery()

    useEffect(() => {
        console.log(data?.categories?.map((item: CategoryDTO) => { return item.title }))

        let categoryTitles = data?.categories?.map((item: CategoryDTO) => item.title)
        getSimilarPostsByCategoryTitle({ categoryTitles, page: 1, limit: 20 })
    }, [])

    return (
        <>


            <Container>
                <Head>
                    <title>{metaTags.title}</title>
                    <meta name="description" content={metaTags.description} key="desc" />

                    {/* Twitter Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metaTags.title} />
                    <meta name="twitter:description" content={metaTags.description} />
                    <meta name="twitter:image" content={metaTags.image} />

                    {/* Open Graph Meta Tags */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="article" />
                    <meta property="og:site_name" content="E-hack" />
                    <meta property="og:title" content={metaTags.title} />
                    <meta property="og:description" content={metaTags.description} />
                    <meta property="og:image" content={metaTags.image} />
                </Head>
                <Stack my={stylePageSection} alignItems='center' justifyContent='center'>
                    <Stack width={1} maxWidth={{ md: 800 }} >
                        {/* == Heading == */}
                        <Stack gap={2}>
                            <Typography variant='h1'>{data?.title}</Typography>
                            {/* <Typography variant='body2'>How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.</Typography> */}

                            <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={2}>
                                <Stack direction='row' gap={2}>
                                    {data?.categories?.map((item: CategoryDTO) => <Chip key={item.title} label={item.title} size="medium" variant="outlined" color='info' />)}
                                </Stack>
                                <Typography variant='body3'>Published {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
                            </Stack>
                        </Stack>

                        <Box height={{ xs: 1, md: 600 }} width={1} className='section-padding'>
                            <Image src={data?.profileURL} alt='blog detail' quality={100} width={1400} height={1400} style={{ objectFit: 'cover' }} />
                        </Box>


                        <Stack width={1} className='blog-description'>
                            <Box component='div' dangerouslySetInnerHTML={{ __html: data?.content }} />
                        </Stack>
                    </Stack>
                </Stack>

                <Divider sx={{ my: 4 }} />

                <Stack alignItems='center' justifyContent='center'>
                    <Typography variant='h4' className='heading-padding-bottom' alignSelf='start' fontWeight={600}>You might also like </Typography>
                    <Grid container spacing={4}>


                        {similarPostData && similarPostData.map((item: any, index: number) => (
                            <Grid item xs={12} sm={12} md={4} key={index}>
                                <BlogCard style={{ direction: 'column', imageHeight: 248 }} data={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                <Divider sx={{ mt: 4 }} />

            </Container >
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const response = await fetch(`${config.apiBaseUrl}/post/getPostById/${query.blogId}`)
    const blogDetail: any = await response.json();
    const metaTags = {
        title: blogDetail?.data?.title,
        description: blogDetail?.data.title, // You might want to update this with the actual description
        image: blogDetail?.data?.profileURL,
    };

    return {
        props: {
            blogDetail,
            metaTags,
        },
    };
};


BlogDetail.layoutProps = {
    title: 'Detail',
    pageTypes: 'public',
    isProtectedPage: false
}


export default BlogDetail