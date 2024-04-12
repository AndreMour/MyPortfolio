import styled from "styled-components";
import { COLORS } from "../../colors/colors";
import { FaCode } from "react-icons/fa6";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 90px 150px 0 150px;
`
export const SkillContainer = styled.div`
    width: 360px;
    height: 342px;
    background-color: ${COLORS.lightDark};
    border-bottom: 6px solid ${COLORS.primaryGreen};
`
export const DivIcons = styled.div`
    display: flex;
    margin-top: 100px;
    margin-left: 30px;
`
export const Circle = styled.div`
    background-color: ${COLORS.primaryGreen};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 10px;
`

export const IconFront = styled(FaCode)`
    font-size: 33px;
    color: white;
`


