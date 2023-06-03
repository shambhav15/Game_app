import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/Image-url";
interface Props {
    game: Game;
}


const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card width='300px' borderRadius={10} overflow={'hidden'}>
                <Image src={getCroppedUrl(game.background_image)}/>
                <CardBody>
                    <Heading fontSize='xl'>{game.name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </>
    )
}

export default GameCard
