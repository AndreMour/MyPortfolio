import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${COLORS.deepDark};

  @media (min-width: 768px) {
    height: 339px;
    padding: 0 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${COLORS.lightDark};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 50px 0 70px 0;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const Title = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: ${COLORS.primaryWhite};

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const Dot = styled.h3`
  font-size: 1.5em;
  color: ${COLORS.primaryGreen};
  margin-top: 3px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const AlignInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 100px;
    margin-top: 0;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    gap: 20px;
    text-align: left;
  }
`;

export const SecundaryTitles = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.2em;
  font-weight: 600;
  color: ${COLORS.primaryWhite};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${COLORS.Gray};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TextHover = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${COLORS.Gray};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DivDeveloped = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 30px 0;
  }
`;

export const Developed = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${COLORS.primaryWhite};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Name = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 400;
  color: ${COLORS.primaryGreen};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;