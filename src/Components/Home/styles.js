import styled from 'styled-components';
import { COLORS } from '../../colors/colors';
import { GoDownload } from "react-icons/go";

export const HomeContainer = styled.div`
  display: grid;
  margin-left: 150px;
  margin-right: auto;
  margin-top: 120px;
`
export const DivName = styled.div`
`
export const Name = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 38px;
  font-weight: 700;
  color: ${COLORS.primaryGreen};
`
export const DivArea = styled.div`
  display: flex;
`
export const Area = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 88px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
`
export const Bar = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 88px;
  font-weight: 500;
  color: ${COLORS.primaryWhite};
`
export const DivDescription = styled.div`
  margin-top: 30px;
  width: 700px;
`
export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: ${COLORS.Gray};
  line-height: 1.8;
`
export const DivButtons = styled.div`
  display: flex;
  margin-top: 60px;
`
export const ButtonEmail = styled.button`
  width: 136px;
  height: 54px;
  background-color: ${COLORS.primaryGreen}; 
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
`
export const ButtonCv = styled.button`
  display: flex;
  align-items: center;
  height: 54px;
  background-color: ${COLORS.Dark};
  color: ${COLORS.Gray};
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-left: 70px;
  cursor: pointer;
`
export const IconeDownload = styled(GoDownload)`
  margin-right: 8px;
  font-size: 24px;
`;
export const WorkDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export const XpDiv = styled.div`
  width: 457px;
  margin-top: 150px;
`
export const TextXp = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 46px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
`
export const DivService = styled.div`
  display: grid;
  width: 360px;
  margin-top: 150px;
  margin-right: 150px;
  margin-left: auto;
`
export const TextService = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.primaryGreen};
`
export const DescriptionService = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.Gray};
`
export const LineBefore = styled.span`
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background-color: ${COLORS.Gray};
  top: 50%;
  transform: translateY(-50%);
  z-index: -1; /* Coloca a linha atrás do texto */
  margin-left: -20px; /* Ajuste para o início da linha */
`;
