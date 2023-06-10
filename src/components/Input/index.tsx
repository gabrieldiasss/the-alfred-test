import { BiSearch } from "react-icons/bi";
import { InputStyle, InputWrapper } from "./styles";

interface InputProps {
  theme: "red" | "white"
}

export function Input({ theme }: InputProps) {
  return (
    <InputWrapper variant={theme}>
      <BiSearch size={28} />
      <InputStyle placeholder="Procure por heróis" />
    </InputWrapper>
  );
}
