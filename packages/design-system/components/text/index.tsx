import React from "react";
import styled from "styled-components";

const StyledText = styled.span``;

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  children: React.ReactNode;
}

const Text = ({ tag, children, ...props }: TextProps) => {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
