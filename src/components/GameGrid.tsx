import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeleton = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                padding={5}
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={10}>

                {isLoading && skeleton.map((skeleton) => <GameCardContainer>
                    <GameCardSkeleton key={skeleton} />
                </GameCardContainer>)}
                {games.map(game => (
                
                        <GameCardContainer>
                            <GameCard key={game.id} game={game} />
                        </GameCardContainer>
                    

                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
