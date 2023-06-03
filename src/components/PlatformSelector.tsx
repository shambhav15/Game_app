import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if (error)
        return null;
    return (

        <Menu>
            <MenuButton
                marginLeft='5'               
                as={Button}
                rightIcon={<BsChevronBarDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((p) => <MenuItem key={p.id}>{p.name}</MenuItem>)}
            </MenuList>
        </Menu>


    )
}

export default PlatformSelector
