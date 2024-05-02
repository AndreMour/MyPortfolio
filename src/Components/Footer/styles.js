import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors"

export const Container = styled.div`
  height: 335px;
  padding: 0 150px;
  background-color: ${COLORS.deepDark};
`
export const Content = styled.div`
  display: flex;
  padding: 50px 0 70px 0;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.lightDark};;
`
export const DivTitle = styled.div`
  display: flex;
`
export const Title = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: ${COLORS.primaryWhite};
`
export const Dot = styled.h3`
  font-size: 24px;
  color: ${COLORS.primaryGreen};
  margin-top: 3px;
`
export const AlignInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 100px;
`
export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SecundaryTitles = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${COLORS.primaryWhite};
`
export const Text = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.Gray};
`
export const TextHover = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.Gray};
  &:hover {
    text-decoration: underline;
  }
`
export const DivDeveloped = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 5px;
`
export const Developed = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.primaryWhite};
`
export const Name = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.primaryGreen};
`