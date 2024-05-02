import React from "react";
import {
    AlignDiv, Button, Container,
    ContainerContent, DivButton, DivTitle,
    Text, Title, InlineDiv, ProjectDiv,
    Image, ProjectTitle, SeeProject,
    SeeIcon, SeeDiv, ImageApp,
    AppDiv,
    WebDiv
} from "./styles";
import Calendar from "../../assets/images/Calendar.png"
import CalendarApp from "../../assets/images/icon_calendar.png"

const Projects = () => {
    return (
        <Container id="projects">
            <ContainerContent>
                <Text>Projetos Recentes</Text>
                <AlignDiv>
                    <DivTitle>
                        <Title>Alguns de meus projetos favoritos.</Title>
                    </DivTitle>
                    <DivButton href="https://github.com/AndreMour" target="_blank" rel="noopener noreferrer">
                        <Button>Ver Projetos</Button>
                    </DivButton>
                </AlignDiv>
                <InlineDiv>
                    <ProjectDiv>
                        <WebDiv>
                            <Image src={Calendar} />
                            <ProjectTitle>Calendar - WebSite</ProjectTitle>
                            <SeeDiv>
                                <SeeProject href="https://github.com/AndreMour/Cleaning-Calendar" target="_blank" rel="noopener noreferrer">
                                    Ver Projeto
                                </SeeProject>
                                <SeeIcon />
                            </SeeDiv>
                        </WebDiv>
                    </ProjectDiv>
                    <ProjectDiv>
                        <AppDiv>
                            <ImageApp src={CalendarApp} />
                            <ProjectTitle>Calendar - Aplicativo</ProjectTitle>
                            <SeeDiv>
                                <SeeProject href="https://github.com/AndreMour/MobileCalendar" target="_blank" rel="noopener noreferrer">
                                    Ver Projeto
                                </SeeProject>
                                <SeeIcon />
                            </SeeDiv>
                        </AppDiv>
                    </ProjectDiv>
                </InlineDiv>
            </ContainerContent>
        </Container>
    )
}

export default Projects;