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
            <TextHover>Linkedin</TextHover>
            <TextHover>GitHub</TextHover>
            <TextHover>Instagram</TextHover>
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