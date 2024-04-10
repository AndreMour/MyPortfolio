import styled from "styled-components";
import { COLORS } from "../../colors/colors";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 74px;
`
export const TitleDiv = styled.div`
  display: flex;
  margin-left: -270px;
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
  margin-right: -270px;
`
export const Pages = styled.h5`
  color: ${COLORS.primaryWhite};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-left: 40px;
`
export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  width: 88px;
  height: 38px;
  background-color: transparent;
  color: ${COLORS.primaryWhite};
  border: 1px solid ${COLORS.primaryGreen};
  margin-left: 40px;
`