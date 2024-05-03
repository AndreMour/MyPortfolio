import { styled, keyframes } from 'styled-components';
import { COLORS } from '../../assets/colors/colors';
import { GoDownload } from "react-icons/go";

const blink = keyframes`
  0% {opacity: 1;}
  50% {opacity: 0;}
  100% {opacity: 1;}
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 20px;

  @media (min-width: 768px) {
    display: grid;
    margin: 120px auto 0 150px;
  }
`;

export const DivName = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Name = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: ${COLORS.primaryGreen};

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const DivArea = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const Area = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  color: ${COLORS.primaryWhite};

  @media (min-width: 768px) {
    font-size: 88px;
    text-align: left;
  }
`;

export const Bar = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2.5em;
  font-weight: 500;
  color: ${COLORS.primaryWhite};
  animation: ${blink} 1s linear infinite;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 88px;
    text-align: left;
  }
`;

export const DivDescription = styled.div`
  margin-top: 20px;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 30px;
    width: 700px;
    text-align: left;
  }
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  color: ${COLORS.Gray};
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 60px;
  }
`;

export const ButtonEmail = styled.button`
  width: auto;
  height: auto;
  padding: 10px 20px;
  background-color: ${COLORS.primaryGreen}; 
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;
  color: ${COLORS.primaryWhite};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 136px;
    height: 54px;
    font-size: 18px;
    margin-bottom: 0;
  }
`;

export const ButtonCv = styled.button`
  display: flex;
  align-items: center;
  height: auto;
  padding: 10px 20px;
  background-color: ${COLORS.Dark};
  color: ${COLORS.Gray};
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 700;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 54px;
    font-size: 18px;
    margin-left: 70px;
  }
`;

export const IconeDownload = styled(GoDownload)`
  margin-right: 8px;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const WorkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const XpDiv = styled.div`
  width: 457px;
  margin-top: 120px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 60px;
  }
`
export const TextXp = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 46px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const DivService = styled.div`
  display: grid;
  margin-right: 150px;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    margin: 30px 0 -20px 0;
  }
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
