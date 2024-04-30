import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";

export const Container = styled.div`
    width: 100%;
    height: 213px;
    border-left: 10px solid ${COLORS.primaryGreen};
    background-color: ${COLORS.deepGray};
    margin-top: 200px;
`
export const DivText = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  margin-left: 150px;
`
export const Text = styled.h3`
    font-family: 'Inter', sans-serif;
    font-size: 38px;
    font-weight: 700;
    color: ${COLORS.primaryWhite};
`
export const SubText = styled.h5`
  font-family: 'Inter', sans-serif;
  font-family: 16px;
  font-weight: 400;
  color: ${COLORS.Gray};
`
