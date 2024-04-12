import NavBar from "../Components/NavBar/Index";
import Home from "../Components/Home/Index";
import { Container } from "./styles";
import Skills from "../Components/Skills";


function App() {
  return (
    <Container>
      <NavBar />
      <Home />
      <Skills />
    </Container>
  );
}

export default App;
