import { styled } from 'styled-components'

export const AutoCompleteContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-brand-red-light']};
  width: 50%;
  height: 300px;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 8px;
  padding: 0 2rem;
  margin-top: 8rem;
  position: absolute;
`

export const AutoCompleteItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  gap: 1rem;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-gray200']};

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
  }
`
