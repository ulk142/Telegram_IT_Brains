// Підключаємо потрібні технології
import styled from "styled-components";

export default function Empty({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.div`
  color: #523d64;
  font-size: 16px;

  display: flex;
  justify-content: center;
  padding: 15px;
`;
