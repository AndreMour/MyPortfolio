import styled from "styled-components";
import { COLORS } from "../../assets/colors/colors";
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
})`
  .Toastify__toast--error {
    background: ${COLORS.Dark};
    color: white;
  }
  .Toastify__toast--success {
    background: ${COLORS.Dark};
    color: white;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background-color: ${COLORS.Dark};
  color: white;
  font-family: 'Inter', sans-serif;
  padding: 14px 28px;
  border-radius: 3px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
`
export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 700;
`
export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`
export const DivInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  margin: 20px 0 20px 0;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #090911;
  color: white;
  padding-left: 20px;
  outline: none;
`
export const InputMessage = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  background-color: #090911;
  color: white;
  padding: 15px 0 0 20px;
  resize: vertical;
  outline: none;
`
export const DivButtons = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50px;
`
export const Cancelar = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  width: 88px;
  height: 38px;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.primaryWhite};
  border: 1px solid red;
  transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
    background-color: red;
  }
`
export const Enviar = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  width: 88px;
  height: 38px;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.primaryWhite};
  border: 1px solid ${COLORS.primaryGreen};
  transition: background-color 0.2s ease, color 0.2s ease;
    &:hover {
    background-color: ${COLORS.primaryGreen};
  }
`