import { styled } from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;

  svg {
    color: ${({ theme }) => theme.colors["base-brand-red"]};
  }
`;

export const HomeContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
