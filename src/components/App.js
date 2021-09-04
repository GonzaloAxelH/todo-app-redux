import styled from "styled-components";

import ToggleTheme from "./ToggleTheme";
import SearchBar from "./SearchBar";
import ListOfTodos from "./ListOfTodos";
import { backgroundColor, textColor } from "../theme/colors";
const Title = styled.h1`
  color: ${textColor};
`;
const ContainerApp = styled.div`
  background-color: ${backgroundColor};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerTitle = styled.div`
  width: calc(60vw + 4em);
`;
const ContainerToggleTheme = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.5em;
`;
const ContainerListOfTodos = styled.div`
  width: calc(60vw + 4em);
`;
const ContainerSearchBar = styled.div`
  width: calc(60vw + 4em);
`;

const App = () => {
  return (
    <ContainerApp>
      <ContainerTitle>
        <Title>Todo</Title>
      </ContainerTitle>
      <ContainerToggleTheme>
        <ToggleTheme />
      </ContainerToggleTheme>
      <ContainerSearchBar>
        <SearchBar />
      </ContainerSearchBar>

      <ContainerListOfTodos>
        <ListOfTodos />
      </ContainerListOfTodos>
    </ContainerApp>
  );
};

export default App;
