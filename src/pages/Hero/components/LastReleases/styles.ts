import { styled } from "styled-components";

export const LastReleasesContainer = styled.div`
  margin-top: 3rem;
`;

export const ComicList = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

export const ComicCard = styled.main`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
