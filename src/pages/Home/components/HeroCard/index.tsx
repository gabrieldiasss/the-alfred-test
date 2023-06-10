import { useNavigate } from "react-router-dom";
import { RegularText } from "../../../../components/Typography";
import { Hero } from "../HeroesList";
import { HeroCardContainer, HeroInfo } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

interface HeroCardProps {
  hero: Hero
  onFavorite: (heroFavorite: Hero) => void 
}

export function HeroCard({ hero, onFavorite }: HeroCardProps) {

  const navigate = useNavigate()

  return (
    <HeroCardContainer onClick={() => navigate(`/${hero.id}`)} >
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />

      <HeroInfo>
        <RegularText>{hero.name}</RegularText>
        <AiOutlineHeart onClick={() => onFavorite(hero)} size={22} color="#FF1510" />
      </HeroInfo>
    </HeroCardContainer>
  );
}
