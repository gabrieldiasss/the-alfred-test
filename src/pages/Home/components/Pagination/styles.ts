import { css, styled } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`

interface PaginationButtonProps {
  active: boolean
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  background-color: ${(props) => props.theme.colors['base-brand-red']};
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors['base-brand-white-light']};
  font-size: 1.125rem;
  border: none;
  border-radius: 4px;

  ${({ active }) => css`
    background: ${({ theme }) =>
      active
        ? theme.colors['base-brand-red-light']
        : theme.colors['base-brand-red']};
    color: ${({ theme }) =>
      active
        ? theme.colors['base-gray500']
        : theme.colors['base-brand-white-light']};
  `}
`
