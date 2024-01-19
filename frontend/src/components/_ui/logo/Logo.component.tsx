import logoImage from '@/../public/images/black-logo.png'
import Image from 'next/image'



export default function Logo() {

  return (
    <Image src={logoImage} alt='logo' priority />
  )
}
