import React from "react";
import {
  Button, Container, DivButton,
  DivText, SubText, Text
} from "./styles";

const Notification = () => {
  const whatsAppUrl = "https://wa.me/5541998486650"

  return (
    <Container>
      <DivText>
        <Text>
          Tem algum projeto em mente?
        </Text>
        <SubText>
          Sinta-se a vontade para me enviar uma mensagem!
        </SubText>
      </DivText>
      <DivButton>
        <Button onClick={() => window.open(whatsAppUrl, "_blank")}>Clique Aqui!</Button>
      </DivButton>
    </Container>
  )
}

export default Notification;