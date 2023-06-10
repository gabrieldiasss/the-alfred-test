import { styled } from "styled-components";

export const HeroDetailsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
`;

export const HeroInfo = styled.div`

  min-width: 300px;

  p {
    margin-top: 2rem;
    max-width: 300px;
  }
`;

export const HeroImage = styled.div`
  img {
    width: 500px;
    height: 500px;
    border-radius: 8px;
  }
`;

export const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ComicsAndMovies = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Assessment = styled.div`
  margin-top: 1rem;
`;

export const LastComic = styled.div`
  margin-top: 1rem;
`;
