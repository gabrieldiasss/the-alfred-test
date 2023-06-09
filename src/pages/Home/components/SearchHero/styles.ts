import { styled } from "styled-components";

export const SearchHeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputFake = styled.div`
  width: 50%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors["brand-red-light"]};
  border-radius: 999px;

  display: flex;
  align-items: center;

  margin-top: 2rem;

  svg {
    color: ${(props) => props.theme.colors["brand-red"]};
  }

  input {
    border: 0;
    background: none;
    outline: 0;
    margin-left: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors["brand-red"]};

    }
  }
`;
