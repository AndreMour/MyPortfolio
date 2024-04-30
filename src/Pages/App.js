import NavBar from "../Components/NavBar/Index";
import Home from "../Components/Home/Index";
import { Container } from "./styles";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";


function App() {
  return (
    <>
      <Container>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
      </Container>
    </>
  );
}

export default App;
