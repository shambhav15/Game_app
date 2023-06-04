import { Button, HStack, Heading, Image, List, ListItem, Spinner} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedUrl from '../services/Image-url';

interface Props {
    onSelectedGenre: (genre: Genre) => void,
    selectedGenre: Genre | null;

}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading)
        return <Spinner />



    return (
        <>
        <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
            <List>
                {data.map((genre) =>
                    <ListItem key={genre.id} padding='6px'>
                        <HStack paddingY={2} >
                            <Image boxSize='32px'
                                objectFit='cover'
                                borderRadius={8}
                                src={getCroppedUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace={'normal'}
                                textAlign={'left'}
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : ''}
                                onClick={() => onSelectedGenre(genre)
                                }
                                variant='link'
                                fontSize='lg'>
                                {genre.name}
                            </Button>

                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}

export default GenreList
