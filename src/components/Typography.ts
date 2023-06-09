import { styled } from "styled-components";

interface TitleTextProps {
    size?: "xl" | "l" | "m" | "s" | "xs"
  }

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "gray500" | "gray400" | "gray200" | "brand-red" | "brand-red-light"
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${(props) => props.theme.colors["base-gray500"]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? "m"}`]};
  font-weight: 700;
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "gray500"}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? "m"}`]};
  font-weight: 500;
`;
