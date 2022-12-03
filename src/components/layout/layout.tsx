import { FC } from "react";
import styled from "styled-components";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

const LayoutFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  background-color: #f5f5f5;
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutFlexbox>
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
    </LayoutFlexbox>
  );
};
