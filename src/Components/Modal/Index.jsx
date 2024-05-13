import React, { useState } from "react";
import {
  Cancelar, Container,
  DivButtons, DivInput, DivTitle, Enviar,
  Input, InputMessage, Label, Modal,
  StyledToastContainer,
  Title
} from "./styles";
import { useSpring, animated } from "react-spring";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Modala({ setModal }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_5sol60j", "template_xk3dblk", templateParams, "l1RkDdugsxB92Y8z4")
      .then((response) => {
        toast.success("Email enviado com sucesso!")
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')

      }, (err) => {
        console.log("ERRO: ", err)
        toast.error(err);
      })

  }

  const animation = useSpring({
    transform: 'translate(-50%, -50%) scale(1)',
    from: { transform: 'translate(-50%, -50%) scale(0)' },
  });

  const AnimatedModal = animated(Modal)

  return (
    <>
      <StyledToastContainer autoClose={2000} position="bottom-right" />
      <Container onClick={() => setModal(false)}>
        <AnimatedModal style={animation} onClick={e => e.stopPropagation()}>
          <DivTitle>
            <Title>Entre em Contato</Title>
          </DivTitle>
          <DivInput>
            <Label>Nome:</Label>
            <Input
              placeholder="Seu Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </DivInput>
          <DivInput>
            <Label>Email:</Label>
            <Input placeholder="contato@exemplo.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </DivInput>
          <DivInput>
            <Label>Mensagem:</Label>
            <InputMessage placeholder="Digite sua Mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </DivInput>
          <DivButtons>
            <Cancelar onClick={() => setModal(false)}>
              Cancelar
            </Cancelar>
            <Enviar onClick={sendEmail}>
              Enviar
            </Enviar>
          </DivButtons>
        </AnimatedModal>
      </Container>
    </>
  );
}