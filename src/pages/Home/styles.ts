import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;

  svg {
    color: ${({ theme }) => theme.colors['base-brand-red']};
  }
`

export const HomeContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  @media (max-width: 500px) {
    text-align: center;
  }
`
