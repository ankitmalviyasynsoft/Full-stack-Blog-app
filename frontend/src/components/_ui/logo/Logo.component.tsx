import logoImage from '@/../public/images/logo-svg/headerLogo.png'
import Image from 'next/image'



export default function Logo() {

  return (
    <Image src={logoImage} alt='logo' height={1000} width={1000} priority />
  )
}
