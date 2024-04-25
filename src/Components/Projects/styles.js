import styled from "styled-components";
import { COLORS } from "../../colors/colors";

export const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color:  ${COLORS.lightDark};
    margin-top: 120px;
`
export const ContainerContent = styled.div`
    margin-left: 150px;
    margin-right: 150px;
    padding-top: 100px;
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
`
export const Title = styled.h3`
    font-size: 46px;
    font-family: 'Inter', 'sans-serif';
    font-weight: 700;
    color: ${COLORS.primaryWhite};
`
export const DivButton = styled.div`
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
    margin-left: 40px;
`
export const AlignDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`