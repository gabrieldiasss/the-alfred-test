import { RegularText } from "../../../../components/Typography";
import { Hero } from "../HeroesList";
import { HeroCardContainer, HeroInfo } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

interface HeroCardProps {
  hero: Hero
}

export function HeroCard({ hero }: HeroCardProps) {
  return (
    <HeroCardContainer>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />

      <HeroInfo>
        <RegularText>{hero.name}</RegularText>
        <AiOutlineHeart size={22} color="#FF1510" />
      </HeroInfo>
    </HeroCardContainer>
  );
}
