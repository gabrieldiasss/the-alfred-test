import { styled } from 'styled-components'

export const LastReleasesContainer = styled.div`
  margin-top: 3rem;
  padding-bottom: 2rem;
`

export const ComicList = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ComicCard = styled.main`
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 500px) {
    text-align: center;

    p {
      max-width: 200px;
    }
  }
`
