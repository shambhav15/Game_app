import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedUrl from '../services/Image-url';

interface Props {
    onSelecGenre: (genre: Genre) => void,
    selectedGenre: Genre | null;

}

const GenreList = ({selectedGenre ,onSelecGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading)
        return <Spinner />



    return (
        <List>
            {data.map((genre) =>
                <ListItem  key={genre.id} padding='6px'>
                    <HStack paddingY={2} >
                        <Image boxSize='32px' borderRadius={8}
                            src={getCroppedUrl(genre.image_background)}
                        />
                        <Button
                            fontWeight={genre.id === selectedGenre?.id ? 'bold' : ''}
                            onClick ={() => onSelecGenre(genre)
                            }
                            variant='link'
                            fontSize='lg'>
                            {genre.name}
                        </Button>

                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList
