import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='20px' spacing={20}>
        <Image src={logo} boxSize='60px' />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
