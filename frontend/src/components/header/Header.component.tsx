import { Autocomplete, IconButton, Button, InputAdornment, Stack, TextField, Container, Box, SwipeableDrawer, ListItemButton, ListItemIcon, ListItemText, Divider, List, ListItem, Avatar, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useRouter } from "next/router";
import { style } from "./Header.style";
import { theme } from "@/utils";
import { useReduxSelector } from "@/hooks/redux.hook";
import { useForm, Controller } from "react-hook-form"
import ProfileMenu from "./components/profileMenu/ProfileMenu.componenet";
import config from "@/config/config.json";
import Image from "next/image";



interface FormData {
  search: string;
}


export default function Header() {
  const router = useRouter();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const { isLoggedIn, profile } = useReduxSelector((state) => state.user);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const onSubmit = (data: FormData) => {
    console.log('hello', data)
    router.push(`/search?q=${data.search}`)
  }


  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center" py={2} height={80} gap={1}>
        <Stack flex={1}>
          <Box width={130} onClick={() => router.push("/")} className="cursor-pointer">
            <Image src={config.logo} alt="Logo" height={100} width={100} />
          </Box>
        </Stack>

        {isMobileDevice ? <>
          <IconButton onClick={() => router.push(`/search?q=`)}>
            <MdOutlineSearch size='2rem' />
          </IconButton>
        </> :
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack flex={{ xs: 1, md: 2 }} display={{ xs: 'none', sm: 'block' }}>
              <Controller name="search" control={control}
                render={({ field }) => (
                  <TextField {...field} variant="outlined" placeholder="Search..."
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton type="submit">
                            <MdOutlineSearch />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Stack>
          </form>
        }

        {
          isLoggedIn && <Stack flex={{ xs: 0.5, md: 1 }} direction="row" justifyContent="end" alignItems="center" gap={2}>
            <ProfileMenu />
          </Stack>
        }


        {/* {
          !isLoggedIn && <Stack flex={{ xs: 0.5, md: 1 }} direction="row" justifyContent="end" alignItems="center" gap={2}>
            <Button variant='text' onClick={() => router.push('/auth/login')}>Login</Button>
            <Button variant='contained' onClick={() => router.push('/auth/register')}> Sign Up</Button>
          </Stack>
        } */}


        {/* {!isSmallScreenUp && <>
            <IconButton onClick={() => toggleDrawer()} aria-label="fingerprint" color="secondary">
              <Stack justifyContent='center' alignItems='center' fontSize={32}><MdMenu /></Stack>
            </IconButton>

            <SwipeableDrawer anchor={'right'} open={openDrawer} onClose={toggleDrawer} onOpen={toggleDrawer}>
              <Box role="presentation" onClick={() => toggleDrawer()} onKeyDown={() => toggleDrawer()}>
                <List>
                  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MdNoteAdd />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </>
          } */}
      </Stack>
    </Container >
  );
}
