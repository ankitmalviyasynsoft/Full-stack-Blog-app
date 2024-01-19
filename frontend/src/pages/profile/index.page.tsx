import { Container } from '@mui/material'
import { useReduxSelector } from '@/hooks/redux.hook'
import ProfileForm from './components/ProfileForm.component'


function Profile() {
  const { profile } = useReduxSelector(state => state.user)


  return (
    <Container className='section-padding'>
      {profile.email && <ProfileForm mode='edit' data={profile} />}
    </Container>
  )
}


Profile.layoutProps = {
  isProtectedPage: false,
  pageTypes: 'protected',
  title: 'Profile',
  header: true,
  footer: true
}


export default Profile