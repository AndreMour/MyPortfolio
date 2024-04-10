import React from 'react'
import {
  Area, DivArea, DivName, HomeContainer, Name, Bar,
  DivDescription, Description, DivButtons, ButtonEmail,
  ButtonCv,
  IconeDownload,
  WorkDiv,
  TextXp,
  XpDiv,
  DivService,
  TextService,
  DescriptionService,
  LineBefore
} from './styles';

const Index = () => {
  return (
    <>
      <HomeContainer>
        <DivName>
          <Name>
            Olá, Eu sou o André
          </Name>
        </DivName>
        <DivArea>
          <Area>
            Desenvolvedor Front-End
          </Area>
          <Bar>
            |
          </Bar>
        </DivArea>
        <DivDescription>
          <Description>
            Tenho 19 anos, e atualmente trabalho como desenvolvedor Font-End. Comecei meus estudos
            como desenvolvedor por volta da metade de 2023 e de lá para cá tenho me desenvolvido e buscado
            me aprimorar cada vez mais. Atualmente trabalho com foco em React e React-Native, porém estou sempre
            aberto para trabalhos FullStack ou com a utilização de outras ferramentas. Também possuo inglês avançado,
            o que me auxilia em buscas rápidas e práticas.
          </Description>
        </DivDescription>
        <DivButtons>
          <ButtonEmail>Email Me</ButtonEmail>
          <ButtonCv>
            <IconeDownload />
            Download CV
          </ButtonCv>
        </DivButtons>
        <WorkDiv>
          <XpDiv>
            <TextXp>1 year experience working</TextXp>
          </XpDiv>
          <DivService>
            <TextService><LineBefore></LineBefore>Serviços</TextService>
            <DescriptionService>Criação e manutenção de Websites e Aplicativos.</DescriptionService>
          </DivService>
        </WorkDiv>
      </HomeContainer>
    </>
  )
}

export default Index