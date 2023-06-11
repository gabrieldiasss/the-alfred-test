import { styled } from 'styled-components'

export const HeaderHeroContainer = styled.header`
  padding-top: 2rem;

  display: flex;
  align-items: flex-start;

  justify-content: space-between;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
