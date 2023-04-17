// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
//import Empty from "../component/Empty";

import ChartList from "../component/ChatList";

// ============================================
// Імпортуємо файли потрібних картинок

import BusinessPhoto from "../file/photo/cloth.png";
import DimaPhoto from "../file/photo/dima.png";
import FamilyPhoto from "../file/photo/family-dog.png";
import NeighborPhoto from "../file/photo/family-natur.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: BusinessPhoto,
    name: "Бізнес",
    message: "Якась реклама",
    isRead: true,
    time: "12:55",
    hashtag: "#business"
  },
  {
    id: 2,
    photo: DimaPhoto,
    name: "Діма",
    message: "Відкрийте двері, будь ласка!",
    isUnread: true,
    time: "10:11"
  },
  {
    id: 3,
    photo: FamilyPhoto,
    name: "Родичі",
    message: "Хто вдома?",
    time: "09:24",
    messageAmount: 1,
    user: "Мама"
  },
  {
    id: 4,
    photo: NeighborPhoto,
    name: "Сусід",
    message: "Чий собака?",
    time: "07:14",
    messageAmount: 12,
    notifyOff: true
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Мої чати" />
      <div>
        <ChartList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
