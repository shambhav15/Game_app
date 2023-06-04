import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelected: (platform: Platform) => void;
    selectedPlatform?: Platform | null;
}


const PlatformSelector = ({ onSelected, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();
    if (error)
        return null;
    return (

        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<BsChevronBarDown />}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {data.map((p) =>
                    <MenuItem
                        onClick={() => onSelected(p)}
                        key={p.id}>
                        {p.name}</MenuItem>)}
            </MenuList>
        </Menu>


    )
}

export default PlatformSelector
