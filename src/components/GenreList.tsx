import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedUrl from '../services/Image-url';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) 
        return <Spinner/>



    return (
        <List>
            {data.map((genre) =>
                <ListItem key={genre.id} padding='5px'>
                    <HStack >
                        <Image boxSize='32px' borderRadius={8}
                            src={getCroppedUrl(genre.image_background)}
                        />
                        <Text fontSize='lg'>{genre.name}</Text>

                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList
