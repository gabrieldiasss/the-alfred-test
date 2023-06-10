import { useNavigate } from "react-router-dom";
import { RegularText } from "../../../../components/Typography";
import { Hero } from "../HeroesList";
import { HeroCardContainer, HeroInfo } from "./styles";
import { useHero } from "@/contexts/useFavorite";
import { HeartFavorite } from "@/components/HeartFavorite";

interface HeroCardProps {
  hero: Hero;
}

export function HeroCard({ hero }: HeroCardProps) {
  const { heroInList } = useHero();
  const navigate = useNavigate();

  return (
    <HeroCardContainer>
      <img
        onClick={() => navigate(`/${hero.id}`)}
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
        alt=""
      />

      <HeroInfo>
        <RegularText>{hero.name}</RegularText>
        <HeartFavorite hero={hero} size={22} />
      </HeroInfo>
    </HeroCardContainer>
  );
}
