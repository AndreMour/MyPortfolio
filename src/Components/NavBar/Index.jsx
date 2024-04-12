import React from 'react'
import { DivPages, Dot, NavContainer, Title, TitleDiv, Pages, Button } from './styles'

const NavBar = () => {
  return (
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
        <Pages>Home</Pages>
        <Pages>Habilidades</Pages>
        <Pages>Projetos</Pages>
        <Button>Contato</Button>
      </DivPages>
    </NavContainer>
  )
}

export default NavBar