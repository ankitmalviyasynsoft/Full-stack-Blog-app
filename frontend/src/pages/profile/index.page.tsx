import { Container } from '@mui/material'
import { useReduxSelector } from '@/hooks/redux.hook'
import ProfileForm from './components/ProfileForm.component'
import { Page } from '@/types/Page.type'


const Profile: Page = () => {
  const { profile } = useReduxSelector(state => state.user)


  return (
    <Container className='section-padding'>
      {profile.email && <ProfileForm mode='edit' data={profile} />}
    </Container>
  )
}


Profile.layoutProps = {
  title: 'Profile',
  pageTypes: 'authenticate',
  roles: ['admin', 'user'],
  isProtectedPage: true,
}


export default Profile