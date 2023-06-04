import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery,searchText })} />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' padding='2px'>
            <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={5}>

            <GameHeading gameQuery={gameQuery}/>


            <Flex >
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelected={(platform) => setGameQuery({ ...gameQuery, platform })} />

              <Box marginLeft={5}>
                <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
              </Box>
            </Flex>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
