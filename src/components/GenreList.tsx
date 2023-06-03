import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedUrl from '../services/Image-url';

interface Props {
    onSelecGenre: (genre: Genre) => void;
}

const GenreList = ({onSelecGenre}: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading)
        return <Spinner />



    return (
        <List>
            {data.map((genre) =>
                <ListItem key={genre.id} padding='5px'>
                    <HStack >
                        <Image boxSize='32px' borderRadius={8}
                            src={getCroppedUrl(genre.image_background)}
                        />
                        <Button
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
