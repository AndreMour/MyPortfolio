import React from 'react'
import {
  AlignInfo,
  Container, Content, Developed, DivDeveloped, DivInfos,
  DivTitle, Dot, Name, SecundaryTitles, Text, TextHover, Title
} from './styles';

const Footer = () => {
  return (
    <Container>
      <Content>
        <DivTitle>
          <Title>
            AndreMoura
          </Title>
          <Dot>
            .
          </Dot>
        </DivTitle>
        <AlignInfo>
          <DivInfos>
            <SecundaryTitles>
              Informações
            </SecundaryTitles>
            <Text>+55 (41) 99848-6650</Text>
            <Text>andremourdev@outlook.com</Text>
            <Text>Curitiba, Brasil</Text>
          </DivInfos>
          <DivInfos>
            <SecundaryTitles>
              Redes Sociais
            </SecundaryTitles>
            <TextHover href="http://linkedin.com/in/andre-moura-b82267268" target="_blank" rel="noopener noreferrer">Linkedin</TextHover>
            <TextHover href="https://github.com/AndreMour" target="_blank" rel="noopener noreferrer">GitHub</TextHover>
            <TextHover href="https://www.instagram.com/andreczw/" target="_blank" rel="noopener noreferrer">Instagram</TextHover>
          </DivInfos>
        </AlignInfo>
      </Content>
      <DivDeveloped>
        <Developed>Desenvolvido por</Developed>
        <Name>AndreMoura</Name>
      </DivDeveloped>
    </Container>
  )
}

export default Footer;