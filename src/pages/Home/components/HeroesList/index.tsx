import { RegularText } from "@/components/Typography";
import { HeroCard } from "../HeroCard";
import { HeroActions, HeroList, HeroesListContainer } from "./styles";
import { useEffect, useState } from "react";

import { api } from "@/lib/axios";
import { useHero } from "@/contexts/useHero";
import { FilteredListHeroes } from "../FilteredListHeroes";
import { HeroCardSkeleton } from "../HeroCardSkeleton";
import { Pagination } from "../Pagination";

export interface Hero {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

const LIMIT = 20;

export function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [onlyFavorite, setOnlyFavorites] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [heroesTotal, setHeroesTotal] = useState(0);
  const { heroesFavorite } = useHero();

  useEffect(() => {
    api
      .get(`/characters`, {
        params: {
          limit: LIMIT,
          offset,
        },
      })
      .then((response) => {
        setHeroes(response.data.data.results);
        setHeroesTotal(response.data.data.total);
        setIsLoading(false);
      });
  }, [offset]);

  /* const order = () => {
    let newHeroes = [...heroes];

    newHeroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setHeroes(newHeroes);
  }; */

  function handleRenderOnlyFavoriteHeroes(): void {
    setOnlyFavorites(!onlyFavorite);
  }

  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <RegularText color="gray200" size="l">
            Encontrados {heroesTotal} heróis
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

            {heroesFavorite.length === 0 && (
              <RegularText size="l">
                Nenhum herói adicionado a lista de favoritos =(
              </RegularText>
            )}
          </>
        ) : (
          <>
            {heroes.map((hero) => (
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
  );
}
