import { styled } from 'styled-components'

export const HeroesListContainer = styled.main`
  margin-top: 4rem;
  margin-bottom: 4rem;
`

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
`

export const HeroList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-bottom: 6rem;

  @media (max-width: 1320px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
