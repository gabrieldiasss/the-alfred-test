import { RegularText } from '@/components/Typography'
import { HeroCard } from '../HeroCard'
import { HeroActions, HeroList, HeroesListContainer } from './styles'
import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import { useHero } from '@/contexts/useHero'
import { FilteredListHeroes } from '../FilteredListHeroes'
import { HeroCardSkeleton } from '../HeroCardSkeleton'

export interface Hero {
  id: number
  name: string
  thumbnail: {
    extension: string
    path: string
  }
}

export function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [onlyFavorite, setOnlyFavorites] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { heroesFavorite } = useHero()

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => {
        setHeroes(response.data.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  /* const order = () => {
    let newHeroes = [...heroes];

    newHeroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setHeroes(newHeroes);
  }; */

  function handleRenderOnlyFavoriteHeroes(): void {
    setOnlyFavorites(!onlyFavorite)
  }

  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <RegularText color="gray200" size="l">
            Encontrados 20 heróis
          </RegularText>
        </div>

        <FilteredListHeroes
          onlyFavorites={onlyFavorite}
          onRenderFavoriteHeroes={handleRenderOnlyFavoriteHeroes}
        />
      </HeroActions>

      <HeroList>
        {isLoading && <HeroCardSkeleton cards={20} />}
        {onlyFavorite ? (
          <>
            {heroesFavorite.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </>
        ) : (
          <>
            {heroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </>
        )}

        {/* {heroesFavorite.length <= 0 && (
          <RegularText size="l">
            Nenhum herói na lista de favoritos =(
          </RegularText>
        )} */}
      </HeroList>
    </HeroesListContainer>
  )
}
