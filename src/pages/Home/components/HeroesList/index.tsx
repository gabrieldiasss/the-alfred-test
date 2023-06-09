import { RegularText } from "../../../../components/Typography";
import { HeroCard } from "../HeroCard";
import { HeroActions, HeroList, HeroesListContainer } from "./styles";
import { FaUserNinja } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export function HeroesList() {
  return (
    <HeroesListContainer>
      <HeroActions>
        <div>
          <RegularText color="gray200" size="l">
            Encontrados 20 heróis
          </RegularText>
        </div>

        <div>
          <RegularText size="l" color="brand-red">
            <FaUserNinja /> Ordenar por nome - A/Z
          </RegularText>
          <RegularText size="l" color="brand-red">
            <AiOutlineHeart size={22} color="#FF1510" /> Somente favoritos
          </RegularText>
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
