import styled from "styled-components";
import { IconProps } from "./types";

export const Icon = styled.img<IconProps>`
  height: ${(props: IconProps) => props.size || 1.5}rem;
  width: ${(props: IconProps) => props.size || 1.5}rem;
  transform: rotate(${(props: IconProps) => (props.isRotated ? 180 : 0)}deg);
  transition: transform 0.2s linear;
`;

export const RoundedIcon = styled.img<IconProps>`
  height: ${(props: IconProps) => props.size || 3}rem;
  width: ${(props: IconProps) => props.size || 3}rem;
  transform: rotate(${(props: IconProps) => (props.isRotated ? 180 : 0)}deg);
  transition: transform 0.2s linear;
`;
