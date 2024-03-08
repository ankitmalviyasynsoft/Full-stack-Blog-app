import React, { useEffect } from 'react'
import { Page } from '@/types/Page.type'
import { stylePageSection, theme } from '@/utils'
import { GetServerSideProps } from 'next'
import { style } from './blogDetail.style'
import { RiTwitterXLine } from "react-icons/ri";
import { CategoryDTO } from '@/dtos/Category.dto'
import { useLazyGetSimilarPostsByCategoryTitleQuery } from '@/redux/api/blogPost.api'
import { FaWhatsappSquare, FaFacebook, FaLinkedinIn, FaInstagram, FaShare } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { Box, Button, Chip, Container, Divider, Grid, IconButton, Menu, MenuItem, Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import config from '@/config/config.json'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import Link from 'next/link'



const BlogDetail: Page = ({ blogDetail, metaTags }: any) => {
    const { data } = blogDetail
    const isMobileDevice = useMediaQuery(((theme: Theme) => theme.breakpoints.down('sm')))

    const [shareMenuE1, setShareMenuE1] = React.useState<null | HTMLElement>(null);
    const open = Boolean(shareMenuE1);

    let [getSimilarPostsByCategoryTitle, { data: similarPostData }] = useLazyGetSimilarPostsByCategoryTitleQuery()

    useEffect(() => {
        console.log(data?.categories?.map((item: CategoryDTO) => { return item.title }))
        let categoryTitles = data?.categories?.map((item: CategoryDTO) => item.title)
        getSimilarPostsByCategoryTitle({ categoryTitles, page: 1, limit: 20 })
    }, [])


    const handleShare = (event: React.MouseEvent<HTMLButtonElement>) => {
        // if (isMobileDevice) {
        //     navigator.share({
        //         title: 'Web Share API Example',
        //         text: 'Check out this cool example!',
        //         url: 'https://example.com'
        //     })
        //         .then(() => console.log('Successfully shared'))
        //         .catch((error) => console.error('Error sharing:', error));
        // }
        // else {
        setShareMenuE1(event.currentTarget);
        // }
    };


    const handleShareClose = () => {
        setShareMenuE1(null);
    };




    return (
        <>
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
                <meta property="og:site_name" content="Ehack" />
                <meta property="og:title" content={metaTags.title} />
                <meta property="og:description" content={metaTags.description} />
                <meta property="og:image" content={metaTags.image} />
            </Head>

            <Container>
                <Stack my={stylePageSection} alignItems='center' justifyContent='center'>
                    <Stack width={1} maxWidth={{ md: 800 }} gap={3}>
                        {/* == Heading == */}
                        <Stack gap={2}>
                            <Typography variant='h1'>{data?.title}</Typography>
                            {/* <Typography variant='body2'>How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.</Typography> */}

                            <Stack direction={{ md: 'row' }} alignItems='center' justifyContent='space-between' gap={2}>
                                <Stack direction='row' gap={2}>
                                    {data?.categories?.map((item: CategoryDTO, index: number) => <Chip key={index} label={item.title} size="medium" variant="outlined" color='info' />)}
                                </Stack>
                                <Typography variant='body3'>Published {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
                            </Stack>
                        </Stack>

                        {/* <Stack alignItems='end' justifyContent='center' >
                            <Box bgcolor='primary.dark' borderRadius='100%'>
                                <IconButton onClick={handleShare}><FaShare size='1.6rem' color='white' /></IconButton>
                            </Box>
                            <Menu id="account-menu" anchorEl={shareMenuE1} open={open} onClose={handleShareClose} onClick={handleShareClose}
                                PaperProps={{ elevation: 0, sx: { ...style.menu } }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                <MenuItem onClick={handleShareClose}>
                                    <Stack gap={2}>
                                        {shareSocialMedia.map((item, index) => (
                                            <MenuItem key={index}>
                                                <Stack component={Link} key={index} target='_blank' href={item.link + data._id} direction='row' alignItems='center' justifyContent='center' gap={2}>
                                                    <Typography alignSelf='start'>{item.icon}</Typography>
                                                    <Typography variant='body1'>{item.title}</Typography>
                                                </Stack>
                                            </MenuItem>
                                        ))}
                                    </Stack>
                                </MenuItem>
                            </Menu>
                        </Stack> */}

                        <Box height={1} width={1} >
                            <Image src={data?.profileURL} alt='blog detail' width={1400} height={1400} style={{ objectFit: 'contain' }} quality={100} />
                        </Box>

                        <Stack width={1} className='blog-description'>
                            <Box component='div' dangerouslySetInnerHTML={{ __html: data?.content }} />
                        </Stack>
                    </Stack>
                </Stack >

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




                    <Divider sx={{ mt: 4 }} />
                </Stack>
            </Container >
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const response = await fetch(`${config.apiBaseUrl}/post/getPostById/${query.blogId}`)
    const blogDetail: any = await response.json();
    const metaTags = {
        title: blogDetail?.data?.title,
        description: blogDetail?.data?.title, // You might want to update this with the actual description
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


let shareSocialMedia = [
    {
        icon: <RiTwitterXLine color='#1DA1F2' size='1.5rem' />,
        title: 'Share on twitter',
        link: `https://twitter.com/intent/tweet?url=${config.domainUrl}/blog/detail/`

    },
    {
        icon: <FaInstagram color='#ee2a7b' size='1.5rem' />,
        title: 'Share on instagram',
        link: ''
    },
    {
        icon: <FaLinkedinIn color='#0077b5' size='1.5rem' />,
        title: 'Share on linkedin',
        link: ''
    },
    {
        icon: <FaFacebook color='#316FF6' size='1.5rem' />,
        title: 'Share on facebook',
        link: ''
    },
    {
        icon: <MdWhatsapp color='#25d366' size='1.5rem' />,
        title: 'Share on whatsapp',
        link: ''
    },
]



export default BlogDetail