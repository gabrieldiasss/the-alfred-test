import { RegularText } from "../../../../components/Typography";
import { Hero } from "../HeroesList";
import { HeroCardContainer, HeroInfo } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

interface HeroCardProps {
  hero: Hero
  onFavorite: (heroFavorite: Hero) => void 
}

export function HeroCard({ hero, onFavorite }: HeroCardProps) {

  return (
    <HeroCardContainer>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />

      <HeroInfo>
        <RegularText>{hero.name}</RegularText>
        <AiOutlineHeart onClick={() => onFavorite(hero)} size={22} color="#FF1510" />
      </HeroInfo>
    </HeroCardContainer>
  );
}
