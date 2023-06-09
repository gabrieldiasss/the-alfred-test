import { InputFake, SearchHeroContainer } from "./styles";
import Logo from "../../../../assets/logo.png";
import { BiSearch } from 'react-icons/bi'

export function SearchHero() {
  return (
    <SearchHeroContainer>
      <img src={Logo} alt="" />

      <h1>Explore o universo</h1>
      <p>
        Mergulhe no dominínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá e breve!
      </p>

      <InputFake>
        <BiSearch size={28} />
        <input placeholder="Procure por heróis" />
      </InputFake>
    </SearchHeroContainer>
  );
}
