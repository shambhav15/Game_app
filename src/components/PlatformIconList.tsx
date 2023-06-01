import { HStack, Icon} from "@chakra-ui/react";
import { Platform } from "../hooks/useGames"
import {
    FaWindows,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
    FaXbox
} from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY='10px'>
            {platforms.map((platform) => (
            <Icon color='gray.500' as={iconMap[platform.slug]} />))}
        </HStack >
    )
}

export default PlatformIconList
