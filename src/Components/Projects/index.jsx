import React from "react";
import {
    AlignDiv, Button, Container,
    ContainerContent, DivButton, DivTitle,
    Text, Title, InlineDiv, ProjectDiv,
    Images, ProjectTitle,
    SeeProject,
    SeeIcon, SeeDiv
} from "./styles";
import Calendar from "../../assets/images/Calendar.png"

const Projects = () => {
    return (
        <Container>
            <ContainerContent>
                <Text>Projetos Recentes</Text>
                <AlignDiv>
                    <DivTitle>
                        <Title>Alguns de meus projetos favoritos.</Title>
                    </DivTitle>
                    <DivButton>
                        <Button>Ver Projetos</Button>
                    </DivButton>
                </AlignDiv>
                <InlineDiv>
                    <ProjectDiv>
                        <Images src={Calendar} />
                        <ProjectTitle>Calendar - WebSite</ProjectTitle>
                        <SeeDiv>
                            <SeeProject>Ver Projeto</SeeProject>
                            <SeeIcon />
                        </SeeDiv>
                    </ProjectDiv>
                </InlineDiv>
            </ContainerContent>
        </Container>
    )
}

export default Projects;