import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TextProps } from "./types";

const Base = styled.p<TextProps>`
  display: ${(props: TextProps) => props.display || "block"};
  margin: ${(props: TextProps) => (props.noMargin ? "0" : "")};
  color: ${(props: TextProps) => (props.color ? props.color : "black")};
  text-align: ${(props: TextProps) => props.align || "left"};
  font-size: ${(props: TextProps) => props.fontSize || "1rem"};
  font-weight: ${(props: TextProps) => (props.bold ? "bold" : "normal")};
  width: ${(props: TextProps) => (props.width ? props.width : "auto")};
  line-height: ${(props: TextProps) => props.lineHeight || "1.25rem"};
`;

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { component = "p", children = null, autofocus = false, style, ...props },
    textRef
  ) => {
    const innerRef = useRef<HTMLElement>(null);
    useEffect(() => {
      if (autofocus) {
        innerRef.current?.focus();
      }
    }, [autofocus]);

    return (
      <Base
        as={component}
        {...props}
        style={style}
        ref={textRef || innerRef}
        tabIndex={autofocus ? -1 : null}
      >
        {children}
      </Base>
    );
  }
);
