import { css, styled } from 'styled-components'

interface InputStyleProps {
  variant: 'red' | 'white'
}

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputWrapper = styled.div<InputStyleProps>`
  width: 50%;
  padding: 1rem 2rem;
  border-radius: 8px;

  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`base-brand-${variant}-light`]};
  `}

  display: flex;
  align-items: center;

  margin-top: 2rem;
`

export const InputStyle = styled.input`
  border: 0;
  background: none;
  outline: 0;
  margin-left: 1rem;

  font-size: 1.125rem;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-brand-red']};
  }
`
