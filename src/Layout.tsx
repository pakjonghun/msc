import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import RootStore from "./store";

interface props {
  children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
  const gameInfo = useLocalObservable(() => RootStore.GameStore);

  return (
    <Container>
      <Stage>{gameInfo.stage}</Stage>
      {children}
    </Container>
  );
};

export default observer(Layout);

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
  background-color: #ccc;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  font-size: 2.5rem;
  background-color: red;
  color: #fff;
`;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  font-size: 2.5rem;
  background-color: red;
  color: #fff;
`;
