import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";

export const Spacer = styled.div`
  height: 74px; 
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 74px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${COLORS.Dark};
`;

export const TitleDiv = styled.div`
  display: flex;
  margin-left: 150px;
  margin-right: auto;
`
export const Title = styled.h3`
  color: ${COLORS.primaryWhite};
  font-family: 'Inter', sans-serif;
  font-size: 24px;
`
export const Dot = styled.h3`
  color: ${COLORS.primaryGreen};
  font-size: 24px;
`
export const DivPages = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  margin-left: auto;
`
export const Pages = styled.h5`
  color: ${COLORS.primaryWhite};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  cursor: pointer;
  margin-left: 40px;
`
export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  width: 88px;
  height: 38px;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.primaryWhite};
  border: 1px solid ${COLORS.primaryGreen};
  margin-left: 40px;
  transition: background-color 0.2s ease, color 0.s ease;
    &:hover {
    background-color: ${COLORS.primaryGreen};
  }
`