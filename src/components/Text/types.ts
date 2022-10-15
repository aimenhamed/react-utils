import { CSSProperties, ReactNode } from "react";

export type AllowedElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type DisplayTypes = "block" | "initial" | "inline";
export type TextAlignTypes = "left" | "center" | "right";

export type TextProps = {
  component?: AllowedElements;
  children?: ReactNode;
  display?: DisplayTypes;
  noMargin?: boolean;
  fontSize?: string;
  lineHeight?: string;
  align?: TextAlignTypes;
  bold?: boolean;
  style?: CSSProperties;
  color?: string;
  width?: string;
  autofocus?: boolean;
  [propName: string]: any;
};
