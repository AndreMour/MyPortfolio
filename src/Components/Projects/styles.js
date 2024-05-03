import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";
import { GoArrowUpRight } from "react-icons/go";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:  ${COLORS.lightDark};
    margin-top: 120px;
`
export const ContainerContent = styled.div`
  margin: 0 150px;
  padding-top: 100px;

  @media (max-width: 768px) {
    margin: 0 30px;
  }
`
export const Text = styled.h5`
    font-size: 20px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 700;
    color: ${COLORS.primaryGreen};
`
export const DivTitle = styled.div`
  width: 580px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size: 46px;
  font-family: 'Inter', 'sans-serif';
  font-weight: 700;
  color: ${COLORS.primaryWhite};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const DivButton = styled.a`
    margin-top: 20px;
`
export const Button = styled.button`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    width: 140px;
    height: 38px;
    background-color: transparent;
    color: ${COLORS.primaryWhite};
    border: 1px solid ${COLORS.primaryGreen};
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
        &:hover {
    background-color: ${COLORS.primaryGreen};
  }
`
export const AlignDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InlineDiv = styled.div`
  display: flex;
  margin-top: 80px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProjectDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 60%;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`

export const ImageApp = styled.img`
  width: 75%;
  height: 60%;

  @media (max-width: 768px) {
    width: 60%;
    height: auto;
  }
`

export const WebDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: center;
  }
`
export const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; 

    @media (max-width: 768px) {
      align-items: center;
  }
`
export const ProjectTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const SeeDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0 100px 0;
    cursor: pointer;
    width: max-content;
    width: 288px;
    
    @media (max-width: 768px) {
      width: 135px;
      margin-left: 10px;
  }
`
export const SeeProject = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: ${COLORS.primaryGreen};
`
export const SeeIcon = styled(GoArrowUpRight)`
    font-size: 24px;
    color: ${COLORS.primaryGreen};
    margin-left: 5px;
`