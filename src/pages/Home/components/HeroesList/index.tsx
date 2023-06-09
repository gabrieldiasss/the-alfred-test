import { HeroCard } from "../HeroCard";
import { HeroActions, HeroList, HeroesListContainer } from "./styles";

export function HeroesList() {
  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <p>Encontrados 20 heróis</p>
        </div>

        <div>
          <p>Ordenar por nome - A/Z</p>
          <p>Somente favoritos</p>
        </div>
      </HeroActions>

      <HeroList>
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
        <HeroCard />
      </HeroList>
    </HeroesListContainer>
  );
}
