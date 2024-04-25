import styled from "styled-components";
import { COLORS } from "../../colors/colors";
import { FaCode } from "react-icons/fa6";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 120px 150px 0 150px;
`
export const SkillContainer = styled.div`
    width: 360px;
    height: 342px;
    background-color: ${COLORS.lightDark};
    border-bottom: 6px solid ${COLORS.primaryGreen};
`
export const DivIcons = styled.div`
    display: flex;
    margin-top: 80px;
    margin-left: 50px;
`
export const Circle = styled.div`
    background-color: ${COLORS.primaryGreen};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 10px;
`
export const IconDiv = styled.div`
    display: flex;
    margin-top: -20px;
    width: 50px;
    margin-left: -19px;
`

export const IconFront = styled(FaCode)`
    font-size: 40px;
    color: white;
`
export const TitleDiv = styled.div`
    display: grid;
    margin-left: 30px;
    margin-top: 20px;
`
export const Title = styled.h3`
    font-size: 26px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 700;
    color: white;
`
export const DescriptionDiv = styled.div`
    display: flex;
    margin: 20px 30px 0 30px;
    justify-content: flex-end;
`
export const Description = styled.h5`
    font-size: 16px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 400;
    color: ${COLORS.Gray};
`


