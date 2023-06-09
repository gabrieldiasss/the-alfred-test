import { HeroesList } from "./components/HeroesList";
import { SearchHero } from "./components/SearchHero";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <SearchHero />

      <HeroesList />
    </HomeContainer>
  );
}
