import React from "react";
import { Container, DivText, SubText, Text } from "./styles";

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
    </Container>
  )
}

export default Notification;