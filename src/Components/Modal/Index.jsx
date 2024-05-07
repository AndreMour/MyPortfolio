import React from "react";
import {
  Cancelar, Container,
  DivButtons, DivInput, DivTitle, Enviar,
  Input, InputMessage, Label, Modal,
  Title
} from "./styles";
import { useSpring, animated } from "react-spring";

export default function Modala({ setModal }) {
  const animation = useSpring({
    transform: 'translate(-50%, -50%) scale(1)',
    from: { transform: 'translate(-50%, -50%) scale(0)' },
  });

  const AnimatedModal = animated(Modal)

  return (
    <>
      <Container onClick={() => setModal(false)}>
        <AnimatedModal style={animation} onClick={e => e.stopPropagation()}>
          <DivTitle>
            <Title>Entre em Contato</Title>
          </DivTitle>
          <DivInput>
            <Label>Nome:</Label>
            <Input placeholder="Seu Nome" />
          </DivInput>
          <DivInput>
            <Label>Email:</Label>
            <Input placeholder="contato@exemplo.com" />
          </DivInput>
          <DivInput>
            <Label>Mensagem:</Label>
            <InputMessage placeholder="Digite sua Mensagem..." />
          </DivInput>
          <DivButtons>
            <Cancelar onClick={() => setModal(false)}>
              Cancelar
            </Cancelar>
            <Enviar>
              Enviar
            </Enviar>
          </DivButtons>
        </AnimatedModal>
      </Container>
    </>
  );
}