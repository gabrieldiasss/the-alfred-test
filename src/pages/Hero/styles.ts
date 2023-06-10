import { styled } from "styled-components";

export const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.colors["base-brand-green-light"]};
  height: 100%;

  svg {
    color: ${({ theme }) => theme.colors["base-brand-red"]};
  }
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
