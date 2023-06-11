import { styled } from 'styled-components'

export const HeroDetailsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;

  gap: 2rem;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

export const HeroInfo = styled.div`
  max-width: 400px;

  p {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const HeroImage = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
  }
`

export const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ComicsAndMovies = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const LastComic = styled.div`
  margin-top: 1rem;
`
