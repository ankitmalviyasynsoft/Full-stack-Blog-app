import React, { useEffect } from 'react'
import { Page } from '@/types/Page.type'
import { stylePageSection, theme } from '@/utils'
import { GetServerSideProps } from 'next'
import { style } from './blogDetail.style'
import { CategoryDTO } from '@/dtos/Category.dto'
import { useLazyGetSimilarPostsByCategoryTitleQuery, useUpdateBlogPostViewCountMutation } from '@/redux/api/blogPost.api'
import { RiTwitterXLine } from "react-icons/ri";
import { MdWhatsapp } from "react-icons/md";
import { BsThreadsFill } from "react-icons/bs";
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTelegram, FaShare } from "react-icons/fa";
import { Box, Container, Divider, Grid, IconButton, Menu, MenuItem, Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import moment from 'moment'
import Head from 'next/head'
import Image from 'next/image'
import config from '@/config/config.json'
import BlogCard from '@/components/_ui/card/BlogCard/BlogCard.component'
import Link from 'next/link'
import ChipCard from '@/components/_ui/card/chip/ChipCard.component'
import { useRouter } from 'next/router'



const BlogDetail: Page = ({ blogDetail, metaTags }: any) => {
    const { data } = blogDetail
    const router = useRouter()
    const isMobileDevice = useMediaQuery(((theme: Theme) => theme.breakpoints.down('sm')))

    const [shareMenuE1, setShareMenuE1] = React.useState<null | HTMLElement>(null);
    const open = Boolean(shareMenuE1);

    let [getSimilarPostsByCategoryTitle, { data: similarPostData }] = useLazyGetSimilarPostsByCategoryTitleQuery()
    let [updateBlogPostViewCount] = useUpdateBlogPostViewCountMutation()

    useEffect(() => {
        let categoryTitles = data?.categories?.map((item: CategoryDTO) => item.title)
        getSimilarPostsByCategoryTitle({ categoryTitles, page: 1, limit: 6 })
        updateBlogPostViewCount({ id: router.query.blogId as string })
    }, [])


    const handleShare = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isMobileDevice) {
            navigator.share({
                title: metaTags.title,
                text: metaTags.title,
                url: `${config.domainUrl}/blog/detail/${metaTags.id}`
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        }
        else {
            setShareMenuE1(event.currentTarget);
        }
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
                <meta property='og:url' content={`${config.domainUrl}/blog/detail/${metaTags.id}`} />
            </Head>

            <Container className=''>
                <Stack my={stylePageSection} alignItems='center' justifyContent='center'>
                    <Stack width={1} maxWidth={{ md: 800 }} gap={3}>
                        {/* == Heading == */}
                        <Stack gap={2}>
                            <Typography variant='h1'>{data?.title}</Typography>
                            {/* <Typography variant='body2'>How do you create compelling presentations that wow your colleagues and impress your managers? Find out with our in-depth guide on UX presentations.</Typography> */}
                        </Stack>

                        <Stack alignItems='end' justifyContent='center' >
                            <Box bgcolor='primary.dark' borderRadius='100%'>
                                <IconButton onClick={handleShare}><FaShare size='1.6rem' color='white' /></IconButton>
                            </Box>
                            <Menu id="account-menu" anchorEl={shareMenuE1} open={open} onClose={handleShareClose} onClick={handleShareClose}
                                PaperProps={{ elevation: 0, sx: { ...style.menu } }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                <Stack gap={2}>
                                    {shareSocialMedia.map((item, index) => (
                                        <MenuItem key={index} onClick={handleShareClose}>
                                            <Stack component={Link} key={index} target='_blank' href={item.link + data._id} direction='row' alignItems='center' justifyContent='center' gap={2}>
                                                <Typography alignSelf='start'>{item.icon}</Typography>
                                                <Typography variant='body1'>{item.title}</Typography>
                                            </Stack>
                                        </MenuItem>
                                    ))}
                                </Stack>
                            </Menu>
                        </Stack>

                        <Box height={1} width={1} >
                            <Image src={data?.profileURL} alt='blog detail' width={1400} height={1400} style={{ objectFit: 'contain' }} quality={100} />
                        </Box>

                        <Stack width={1} className='blog-description'>
                            <Box component='div' dangerouslySetInnerHTML={{ __html: data?.content }} />
                        </Stack>

                        <Stack gap={2}>
                            <Stack direction='row' flexWrap='wrap' gap={2}>
                                {data?.categories?.map((item: CategoryDTO, index: number) =>
                                    <ChipCard categoryData={item} key={item._id} />
                                )}
                            </Stack>
                            <Typography variant='body3' mt={3} alignSelf='end'>Published {moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
                        </Stack>
                    </Stack>
                </Stack >

                <Divider sx={{ my: 4 }} />

                <Stack alignItems='center' justifyContent='center'>
                    <Typography variant='h2' className='heading-padding-bottom' alignSelf='start'>You might also like </Typography>
                    <Grid container spacing={4}>

                        {similarPostData && similarPostData.map((item: any, index: number) => (
                            <Grid item xs={12} sm={12} md={4} key={index}>
                                <BlogCard style={{ direction: 'column', imageHeight: 248 }} data={item} isCategory isContent />
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
        id: blogDetail?.data?._id,
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
    // {
    //     icon: <RiTwitterXLine color='#1DA1F2' size='1.5rem' />,
    //     title: 'Share on twitter',
    //     link: `https://twitter.com/intent/tweet?url=${config.domainUrl}/blog/detail/`
    // },
    // {
    //     icon: <FaInstagram color='#ee2a7b' size='1.5rem' />,
    //     title: 'Share on instagram',
    //     link: `https://twitter.com/intent/tweet?url=${config.domainUrl}/blog/detail/`
    // },

    {
        icon: <FaLinkedinIn color='#0077b5' size='1.5rem' />,
        title: 'Share on linkedin',
        link: `https://www.linkedin.com/sharing/share-offsite/?url=${config.domainUrl}/blog/detail/`
    },
    {
        icon: <FaFacebook color='#316FF6' size='1.5rem' />,
        title: 'Share on facebook',
        link: `https://www.facebook.com/sharer/sharer.php?u=${config.domainUrl}/blog/detail/`
    },
    {
        icon: <MdWhatsapp color='#25d366' size='1.5rem' />,
        title: 'Share on whatsapp',
        link: `https://api.whatsapp.com/send?text=Check out this content:${config.domainUrl}/blog/detail/`
    },
    {
        icon: <BsThreadsFill color='#431f2b' size='1.5rem' />,
        title: 'Share on Threads',
        link: `https://www.threads.net/intent/post?text=${config.domainUrl}/blog/detail/`
    },
    {
        icon: <FaTelegram color='#0088cc' size='1.5rem' />,
        title: 'Share on telegram',
        link: `https://t.me/share/url?url=${config.domainUrl}/blog/detail/`
    },
]



export default BlogDetail