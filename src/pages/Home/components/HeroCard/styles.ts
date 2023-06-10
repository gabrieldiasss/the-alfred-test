import { styled } from "styled-components";

export const HeroCardContainer = styled.div`
  width: 250px;
  height: 250px;

  cursor: pointer;

  img {
    width: 250px;
    height: 250px;
    background-color: ${(props) => props.theme.colors["base-brand-red"]};
    border-radius: 8px;
  }
`;

export const HeroInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  svg {
    cursor: pointer;
  }
`;
