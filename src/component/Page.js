// Імпортуємо технологію styled для стилізації
import styled from "styled-components";

// Створюємо компонент "Сторінка", який відповідає за оболочку сторінки
export default function Page({ children }) {
  return (
    <Window>
      {/* children - це змінна, яка виводить все, що ми поклали всередену компонента */}
      {/* В цьому випадку ми виводимо саме наш інтерфейс сторінки, попередньо обгорнувши потрібними елементами */}
      <View>{children}</View>
    </Window>
  );
}

// Елемент "Вікно" надає стилізацію для вікна, в якому генерується інтерфейс
const Window = styled.div`
  /* Робимо фон вікна */
  background-color: #151515;
`;

// Елемент "Відображення" надає формат відображення інтерфейсу
const View = styled.div`
  /* Робимо максимальну ширину інтерфейса додатка */
  max-width: 620px;
  /* Задаємо колір фону */
  background-color: #edecf0;
  /* Робимо, щоб інтерфейс ставав по центру, якщо ширина екрану більша, ніж ширина інтерфейсу */
  margin: 0 auto;
  /* Задаємо мінімальну висоту інтерфейсу таку саму як висота екрана */
  min-height: 100vh;
  /* Включаємо режим верстки, задаємо потрібну структуру сторінки */
  display: grid;
  grid-template-rows: 80px 1fr 90px;
`;
