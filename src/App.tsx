import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'

const App = () => {
  const [selectedgenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`

      }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}

      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' padding='2px'>
            <GenreList selectedGenre={selectedgenre} onSelecGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedgenre} />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
