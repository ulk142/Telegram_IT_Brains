// Імпортуємо потрібні технології
import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as UnreadIcon } from "../file/chat/unread.svg";
import { ReactComponent as ReadIcon } from "../file/chat/read.svg";

import { Link } from "react-router-dom";

// Генеруємо компонент "Список чатів"
export default function ChatList({ list }) {
  return <List>{list.map(ChatItem)}</List>;
}

const List = styled.div`
  /* Задаємо колір фону */
  background-color: #fff;
  /* Включаємо режим grid, щоб всі елементи списка ставали вертикально */
  display: grid;
  /* Задаємо сірі рамки знизу та зверху списка */
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Один Чат", в якому ми отримуємо дані одного чату та виводимо їх
function ChatItem({
  photo,
  message,
  name,
  id,
  user,
  messageAmount,
  notifyOff,
  isRead,
  isUnread,
  time,
  hashtag
}) {
  return (
    <React.Fragment key={id}>
      <Item to="/dialog">
        <Image src={photo} />
        <Content>
          <Row>
            <InfoColumn>
              <Name>{name}</Name>
              <User>{user}</User>
              <Message>{message}</Message>
              <Hashtag>{hashtag}</Hashtag>
            </InfoColumn>
            <StatusColumn>
              <Time>{time}</Time>
              {messageAmount && (
                <MessageAmount notifyOff={notifyOff}>
                  {messageAmount}
                </MessageAmount>
              )}
              {isRead && (
                <Icon>
                  <ReadIcon />
                </Icon>
              )}
              {isUnread && (
                <Icon>
                  <UnreadIcon />
                </Icon>
              )}
            </StatusColumn>
          </Row>
        </Content>
      </Item>
    </React.Fragment>
  );
}

const Hashtag = styled.div`
  font-size: 14px;
  color: #111;
`;

const User = styled.div`
  font-size: 14px;
  color: #037ee5;
`;

const Time = styled.div`
  font-size: 12px;
  color: #8e8e93;
`;

const Message = styled.div`
  font-size: 14px;
  color: #8e8e93;
`;

const Name = styled.div`
  font-size: 16px;
  color: #111;
`;

// ======================================

const Icon = styled.div`
  height: 24px;
  width: 24px;

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

const MessageAmount = styled.div`
  font-size: 12px;
  color: #fff;
  background-color: #037ee5;
  padding: 2px 10px;
  border-radius: 15px;

  ${({ notifyOff }) => {
    if (notifyOff === true) {
      return css`
        background-color: #8e8e93;
      `;
    }
  }}
`;

// ======================================
// Далі йдуть елементи, які відповідають за відображення даних одного чату в потрібній структурі

const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

// =========================================

// Елемент "Картинка" чату
const Image = styled.img`
  /* Задаємо ширину та висоту */
  width: 60px;
  height: 60px;
  /* Відступ праворуч, щоб текст опції не прижимався до картинки */
  margin-right: 16px;
  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  margin-top: 8px;
  margin-bottom: 8px;
  /* Робимо закруглення країв */
  border-radius: 50%;
`;

// Елемент "Контент", в якому знаходяться основні дані про чат
const Content = styled.div`
  /* Задаємо текст  на всю вільну ширину */
  width: 100%;
  /* Відступ зверху та знизу, щоб елемент не налазив на рамку карточки чату */
  padding-top: 8px;
  padding-bottom: 8px;
  /* Включаємо режим верстки flex, робимо віддображення елементів вертикально */
  display: flex;
  flex-direction: column;
  /* Робимо відступ вертикальний між елементами */
  gap: 2px;
`;

// Елемент "Один чат", який відповідає за відображення карточки одного чату
const Item = styled(Link)`
  /* Включаємо режим flex, */
  display: flex;
  /* Відступ зправа та зліва, щоб елементи не налазили на края */
  padding-left: 16px;
  padding-right: 16px;
  /* Робимо, щоб всі елементи "Заголовок" окрім останнього */
  /* мали знизу сіру лінію */
  &:not(:last-of-type) > ${Content} {
    border-bottom: 1px solid #d7d7d7;
  }
  /* Задаємо можливість робити анімацію */
  transition: opacity 0.7s;
  /* Рибимо анімацію при наведені курсором мишки*/
  &:hover {
    /* Виставляємо прозорість на 50% */
    opacity: 0.5;
    /* Робимо інший дизайн курсору */
    cursor: pointer;
  }
`;
