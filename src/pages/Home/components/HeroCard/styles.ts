import { styled } from "styled-components";

export const HeroCardContainer = styled.div`
  width: 250px;
  height: 250px;

  img {
    width: 250px;
    height: 250px;
    background-color: ${(props) => props.theme.colors["brand-red"]};
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
