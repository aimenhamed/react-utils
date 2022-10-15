import styled from "styled-components";
import { ImageProps } from "./types";

export const Image = styled.img<ImageProps>`
  height: ${(props) => (props.height ? props.height : "inherit")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;
