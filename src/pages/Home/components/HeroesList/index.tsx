import { RegularText } from "@/components/Typography";
import { HeroCard } from "../HeroCard";
import { HeroActions, HeroList, HeroesListContainer } from "./styles";
import { FaUserNinja } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "@/lib/axios";
import { hash, publicKey, time } from "@/utils/marvelApi";

export interface Hero {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export function HeroesList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [heroesFavorite, setHeroesFavorite] = useState<Hero[]>([]);
  const [onlyFavorite, setOnlyFavorites] = useState(false);

  useEffect(() => {
    api
      .get(`/characters`)
      .then((response) => setHeroes(response.data.data.results));
  }, []);

  /* const order = () => {
    let newHeroes = [...heroes];

    newHeroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setHeroes(newHeroes);
  }; */

  // Função no useContext

  function handleFavoriteHero(heroFavorite: Hero) {
    const heroAlreadyExistsInListFavorites = heroesFavorite.some(
      (hero) => hero.id === heroFavorite.id
    );

    if (heroAlreadyExistsInListFavorites) {
      console.log("Herói já existe");

      return;
    }

    if (heroesFavorite.length >= 5) {
      console.log("Nao pode conter mais de 5 favoritos");

      return;
    }
    const newHeroInList = [...heroesFavorite, heroFavorite];

    setHeroesFavorite(newHeroInList);
  }

  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <RegularText color="gray200" size="l">
            Encontrados 20 heróis
          </RegularText>
        </div>

        {/* Criar novo componente */}
        <div>
          <RegularText size="l" color="brand-red">
            <FaUserNinja /> Ordenar por nome - A/Z
          </RegularText>
          <RegularText size="l" color="brand-red">
            <AiOutlineHeart
              onClick={() => setOnlyFavorites(!onlyFavorite)}
              size={24}
              color="#FF1510"
            />{" "}
            Somente favoritos
          </RegularText>
        </div>
      </HeroActions>

      <HeroList>
        {onlyFavorite ? (
          <>
            {heroesFavorite.map((hero) => (
              <HeroCard
                onFavorite={handleFavoriteHero}
                key={hero.id}
                hero={hero}
              />
            ))}
          </>
        ) : (
          <>
            {heroes.map((hero) => (
              <HeroCard
                onFavorite={handleFavoriteHero}
                key={hero.id}
                hero={hero}
              />
            ))}
          </>
        )}
      </HeroList>
    </HeroesListContainer>
  );
}
