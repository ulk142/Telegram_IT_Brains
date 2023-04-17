// Підключаємо потрібні технології
import React from "react";
import styled from "styled-components";

// Створюємо компонент "Шапка"
export default function Header({ title }) {
  return (
    <Block>
      {/* Виводимо текст заголовка, який ми передаємо в компонент "Шапка" */}
      <Title>{title}</Title>
    </Block>
  );
}
// Елемент "Блок" який відповідає за відображення тексту компонента "Шапка"
const Block = styled.div`
  /* Робимо ширину блока */
  width: 100%;
  /* Робимо колір фону */
  background-color: #edecf0;
  /* Задаємо колір для рамки знизу блока*/
  border-bottom: solid #d7d7d7 1px;
  /* Включаємо режим верстки flex */
  display: flex;
  /* робимо текст горизонтально по центру */
  justify-content: center;
  /* робимо текст горизонтально по центру */
  align-items: center;
  /* Задаємо висоту блоку шапки */
  /* !!!! Уважно. Це значення змінювати не можна */
  height: 60px;
`;

// Елемент "Заголовок", який відповідає за віддображення тексту компонента "Шапка" в змінній title
const Title = styled.span`
  /* Задаємо розмір тексту */
  font-size: 18px;
  /* Задаємо жирність шрифта */
  font-weight: bold;
  /* Задаємо колір тексту */
  color: #523d64;
`;
