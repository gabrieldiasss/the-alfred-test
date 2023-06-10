import { Logo } from "@/components/Logo";
import { HeaderHeroContainer } from "./styles";
import { Input } from "@/components/Input";

export function HeaderHero() {
  return (
    <HeaderHeroContainer>
      <Logo />

      <Input theme="white" />
    </HeaderHeroContainer>
  );
}
