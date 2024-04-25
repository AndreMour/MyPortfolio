import React from "react";
import { AlignDiv, Button, Container, ContainerContent, DivButton, DivTitle, Text, Title } from "./styles";

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
        </ContainerContent>
    </Container>
    )
}

export default Projects;