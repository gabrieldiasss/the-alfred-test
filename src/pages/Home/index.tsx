import { HeroesList } from './components/HeroesList'
import { SearchHero } from './components/SearchHero'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <SearchHero />

        <HeroesList />
      </HomeContent>
    </HomeContainer>
  )
}
