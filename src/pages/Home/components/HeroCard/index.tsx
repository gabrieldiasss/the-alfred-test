import { RegularText } from "../../../../components/Typography";
import { HeroCardContainer, HeroInfo } from "./styles";
import { AiOutlineHeart } from "react-icons/ai";

export function HeroCard() {
  return (
    <HeroCardContainer>
      <img src="" alt="" />

      <HeroInfo>
        <RegularText>Start Lord</RegularText>
        <AiOutlineHeart size={22} color="#FF1510" />
      </HeroInfo>
    </HeroCardContainer>
  );
}
