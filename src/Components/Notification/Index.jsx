import React from "react";
import {
  Button, Container, DivButton,
  DivText, SubText, Text
} from "./styles";

const Notification = () => {
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
        <Button>Clique Aqui!</Button>
      </DivButton>
    </Container>
  )
}

export default Notification;