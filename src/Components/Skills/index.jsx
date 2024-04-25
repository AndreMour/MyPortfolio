import React from 'react'
import { Circle, Container, DivIcons,
   IconFront, SkillContainer, IconDiv,
  TitleDiv, Title, DescriptionDiv, Description} from './styles'

const Skills = () => {
  return (
    <Container>
        <SkillContainer>
            <DivIcons>
                <Circle>
                  <IconDiv>
                    <IconFront />
                  </IconDiv>
                </Circle>
            </DivIcons>
            <TitleDiv>
              <Title>Desenvolvimento</Title>
              <Title>Front-End</Title>
            </TitleDiv>
            <DescriptionDiv>
              <Description>
                  Densenvolvimento de apps e websites, com foco em React 
                  e React Native.
              </Description>
            </DescriptionDiv>
        </SkillContainer>
        <SkillContainer></SkillContainer>
        <SkillContainer></SkillContainer>
    </Container>
  )
}

export default Skills