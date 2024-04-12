import React from 'react'
import { Circle, Container, DivIcons, IconFront, SkillContainer } from './styles'

const Skills = () => {
  return (
    <Container>
        <SkillContainer>
            <DivIcons>
                <Circle>
                    <IconFront />
                </Circle>
            </DivIcons>
        </SkillContainer>
        <SkillContainer></SkillContainer>
        <SkillContainer></SkillContainer>
    </Container>
  )
}

export default Skills