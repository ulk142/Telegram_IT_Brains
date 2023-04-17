import React from "react";
import styled from "styled-components";

// Підключаємо іконку для кнопки
import { ReactComponent as SendIcon } from "../file/dialog/send.svg";

// Створюємо компонент "Кнопка відправити"
export default function SendButton({ onClick }) {
  return (
    <SendButtonTag onClick={onClick}>
      <SendIcon />
    </SendButtonTag>
  );
}

// Створюємо елемент "Кнопка відправити"
const SendButtonTag = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #007aff;
  transition: opacity 0.7s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  & > svg {
    height: 16px;
    width: 16px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
