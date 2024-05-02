import React from 'react'
import {
  DivPages, Dot, NavContainer,
  Title, TitleDiv, Pages, Button, Spacer
} from './styles'

const NavBar = () => {
  const scrollToPage = (pageId) => {
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavContainer>
        <TitleDiv>
          <Title>
            AndreMoura
          </Title>
          <Dot>
            .
          </Dot>
        </TitleDiv>
        <DivPages>
          <Pages onClick={() => scrollToPage('home')}>Home</Pages>
          <Pages onClick={() => scrollToPage('skills')}>Habilidades</Pages>
          <Pages onClick={() => scrollToPage('projects')}>Projetos</Pages>
          <Button>Contato</Button>
        </DivPages>
      </NavContainer>
      <Spacer />
    </>
  )
}

export default NavBar