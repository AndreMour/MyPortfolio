import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 213px;
  border-left: 10px solid ${COLORS.primaryGreen};
  background-color: ${COLORS.deepGray};
  margin-top: 200px;
  padding: 0 150px;
`
export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
export const Text = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 38px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
`
export const SubText = styled.h5`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.Gray};
`
export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
  width: 159px;
  height: 54px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: ${COLORS.primaryWhite};
  background-color: ${COLORS.primaryGreen};
`