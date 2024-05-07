import React, { useState } from 'react'
import {
  DivPages, Dot, NavContainer,
  Title, TitleDiv, Pages, Button, Spacer
} from './styles'
import Modal from '../Modal/Index';

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
          <Button onClick={toggleModal}>Contato</Button>
        </DivPages>
      </NavContainer>
      {modal && (
        <Modal setModal={setModal} />
      )}
      <Spacer />
    </>
  )
}

export default NavBar