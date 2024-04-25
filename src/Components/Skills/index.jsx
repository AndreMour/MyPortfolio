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
                Specialize in responsive and interactive front-end development. 
                With a deep understanding of HTML, CSS, and JS.
              </Description>
            </DescriptionDiv>
        </SkillContainer>
        <SkillContainer></SkillContainer>
        <SkillContainer></SkillContainer>
    </Container>
  )
}

export default Skills