import { RegularText } from '@/components/Typography'
import { HeroCard } from '../HeroCard'
import { HeroActions, HeroList, HeroesListContainer } from './styles'
import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'
import { useHero } from '@/contexts/useHero'
import { FilteredListHeroes } from '../FilteredListHeroes'
import { HeroCardSkeleton } from '../HeroCardSkeleton'
import { Pagination } from '../Pagination'

export interface IHeroesList {
  results?: {
    id: number
    name: string
    thumbnail: {
      extension: string
      path: string
    }
  }[]
  total: number
}

const LIMIT = 20

export function HeroesList() {
  const [heroes, setHeroes] = useState<IHeroesList>([] as any)
  const [onlyFavorite, setOnlyFavorites] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [checked, setChecked] = useState(true)
  const { heroesFavorite } = useHero()

  useEffect(() => {
    api
      .get(`/characters`, {
        params: {
          limit: LIMIT,
          offset,
          orderBy: checked ? 'name' : '-name',
        },
      })
      .then((response) => {
        setHeroes(response.data.data)
        setIsLoading(false)
      })
  }, [offset, checked])

  function handleChange() {
    setChecked(!checked)
  }

  function handleRenderOnlyFavoriteHeroes(): void {
    setOnlyFavorites(!onlyFavorite)
  }

  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <RegularText color="gray200" size="l">
            Encontrados {heroes.total} heróis
          </RegularText>
        </div>

        <FilteredListHeroes
          onlyFavorites={onlyFavorite}
          onRenderFavoriteHeroes={handleRenderOnlyFavoriteHeroes}
          checked={checked}
          handleChange={handleChange}
        />
      </HeroActions>

      <HeroList>
        {isLoading && <HeroCardSkeleton cards={20} />}
        {onlyFavorite ? (
          <>
            {heroesFavorite.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}

            {heroesFavorite.length === 0 && (
              <RegularText size="l">
                Nenhum herói adicionado a lista de favoritos =(
              </RegularText>
            )}
          </>
        ) : (
          <>
            {heroes.results?.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </>
        )}
      </HeroList>

      {!onlyFavorite && (
        <Pagination
          limit={LIMIT}
          total={1562}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </HeroesListContainer>
  )
}
