import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors["base-brand-red-light"]};

`;

export const FooterContent = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;

  img {
    max-width: 100px;
    cursor: pointer;
  }
`;
