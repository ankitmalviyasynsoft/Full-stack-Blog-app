import logoImage from '@/../public/images/img-not-found.svg'
import Image from 'next/image'



export default function ImageNotFound() {

  return (
    <Image src={logoImage} alt='logo' priority />
  )
}
