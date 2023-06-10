import { useHero } from "@/contexts/useFavorite";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartFavoriteProps {
  hero: any;
  size: number;
}

export function HeartFavorite({ hero, size }: HeartFavoriteProps) {
  const { heroInList, handleFavoriteHero } = useHero();

  return (
    <>
      {heroInList[hero.id] ? (
        <AiFillHeart
          onClick={() => handleFavoriteHero(hero)}
          size={size}
          color="#FF1510"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => handleFavoriteHero(hero)}
          size={size}
          color="#FF1510"
        />
      )}
    </>
  );
}
