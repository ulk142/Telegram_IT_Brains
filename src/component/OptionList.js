// Імпортуємо потрібні технології
import React from "react";
import styled from "styled-components";

// Створюємо компонент Список Опцій, який нам потрібен на сторінці Налаштування
export default function OptionList({ list }) {
  // Функція .map() дозволяє згенерувати для кожного елемента списка опцій
  // свій власний компонент одної опції, в якому будуть передані потрібні дані
  return <List>{list.map(OptionItem)}</List>;
}

// Елемент "Cписок" який відповідає за відображення списка опцій
const List = styled.div`
  /* Задаємо колір фону */
  background-color: #fff;

  /* Включаємо режим grid, щоб всі елементи списка ставали вертикально */
  display: grid;

  /* Задаємо сірі рамки знизу та зверху списка */
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Одна Опція", в якому ми отримуємо дані однієї опції та виводимо їх
function OptionItem({ Image, title, id }) {
  return (
    // Технічний тег, в який ми передаємо ідентифікатор опції
    <React.Fragment key={id}>
      <Item>
        {/* в src передаємо картинку іконки */}
        {/* в alt передаємо заголовок опції, щоб браузер краще розумів до чого тут певна картинка */}
        <Icon>
          {/* Виводимо змінну Image, яка має всередені вихідний код картинки для іконки */}
          <Image />
        </Icon>
        {/* Передаємо заголовок опції */}
        <Title>{title}</Title>
      </Item>
    </React.Fragment>
  );
}

// Елемент "Іконка" для картинки опції
const Icon = styled.div`
  /* Задаємо ширину */
  width: 40px;
  /* Задаємо висоту */
  height: 40px;

  /* Відступ праворуч, щоб текст опції не прижимався до картинки */
  margin-right: 16px;

  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  padding-top: 8px;
  padding-bottom: 8px;
`;

// Елемент "Заголовок" для тексту опції
const Title = styled.div`
  /* Задаємо текст опції на всю вільну ширину карточки опції */
  width: 100%;

  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  padding-top: 8px;
  padding-bottom: 8px;

  /* Включаємо режим верстки flex, */
  display: flex;
  /* робимо текст по центру */
  align-items: center;

  /* Задаємо розмір тексту */
  font-size: 18px;

  /* Задаємо колір тексту */
  color: #523d64;
`;

// Елемент "Один елемент опції", якій відповідає за відображення
// елемента "Заголовок" та "Іконка" для компонент "Одна опція"
const Item = styled.div`
  /* Включаємо режим flex, */
  display: flex;
  /* робимо спільну висоту елемента "Заголовок" та "Іконка" */
  align-items: stretch;

  /* Відступ зправа та зліва, щоб елемент "Заголовок" та "Іконка" не налазили на края */
  padding-left: 16px;
  padding-right: 16px;

  /* Робимо, щоб всі елементи "Заголовок" окрім останнього */
  /* мали знизу сіру лінію */
  &:not(:last-of-type) > ${Title} {
    border-bottom: 1px solid #d7d7d7;
  }

  /* Задаємо можливість робити анімацію */
  transition: opacity 0.7s;

  /* Рибимо анімацію при наведені курсором мишки на "Один елемент опції"*/
  &:hover {
    /* Виставляємо прозорість на 50% */
    opacity: 0.5;
    /* Робимо інший дизайн курсору */
    cursor: pointer;
  }
`;