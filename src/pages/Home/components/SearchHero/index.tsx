import { InputFake, SearchHeroContainer } from "./styles";
import Logo from "../../../../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { RegularText, TitleText } from "../../../../components/Typography";

export function SearchHero() {
  return (
    <SearchHeroContainer>
      <img src={Logo} alt="" />

      <TitleText size="l">EXPLORE O UNIVERSO</TitleText>
      <RegularText color="gray400">
        Mergulhe no dominínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá e breve!
      </RegularText>

      <InputFake>
        <BiSearch size={28} />
        <input placeholder="Procure por heróis" />
      </InputFake>
    </SearchHeroContainer>
  );
}
