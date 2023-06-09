import { styled } from "styled-components";

export const HeroCardContainer = styled.div`
  width: 250px;
  height: 250px;

  img {
    width: 250px;
    height: 250px;
    background-color: ${(props) => props.theme.colors["base-brand-red"]};
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;
