import {  SearchHeroContainer } from "./styles";
import { RegularText, TitleText } from "../../../../components/Typography";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/Input";

export function SearchHero() {
  return (
    <SearchHeroContainer>
      <Logo />

      <TitleText size="l">EXPLORE O UNIVERSO</TitleText>
      <RegularText color="gray400">
        Mergulhe no dominínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá e breve!
      </RegularText>

      <Input theme="red" />
    </SearchHeroContainer>
  );
}
