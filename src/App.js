import { Provider } from "react-redux";
import { store } from "./store";
import RouteTodo from "./components/todoList/RouteTodo";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/todo" element={<RouteTodo />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
