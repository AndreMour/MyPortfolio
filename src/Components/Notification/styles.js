import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-left: 10px solid ${COLORS.primaryGreen};
  background-color: ${COLORS.deepGray};
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 213px;
    padding: 0 150px;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Text = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 2em;
  font-weight: 700;
  color: ${COLORS.primaryWhite};

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const SubText = styled.h5`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${COLORS.Gray};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 10px 20px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  color: ${COLORS.primaryWhite};
  background-color: ${COLORS.primaryGreen};

  @media (min-width: 768px) {
    width: 159px;
    height: 54px;
    font-size: 18px;
  }
`;