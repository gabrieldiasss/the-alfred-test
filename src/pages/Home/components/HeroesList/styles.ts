import { styled } from "styled-components";

export const HeroesListContainer = styled.div`
  margin-top: 4rem;
`;

export const HeroActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const HeroList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
`;
