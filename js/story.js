const story = {
  start: {
    background: "images/backgrounds/forest.jpg",
    character: "images/characters/girl.png",
    speaker: "Лія",
    text: "Я чекала на тебе. Цей ліс не випадково привів тебе сюди.",
    choices: [
      { text: "Хто ти?", next: "who" },
      { text: "Де я?", next: "where" }
    ]
  },

  who: {
    background: "images/backgrounds/forest.jpg",
    character: "images/characters/girl.png",
    speaker: "Лія",
    text: "Мене звати Лія. Я провідниця між звичайним світом і Академією Місячного Світла.",
    choices: [
      { text: "Піти з Лією", next: "academy" },
      { text: "Залишитися в лісі", next: "forestEnd" }
    ]
  },

  where: {
    background: "images/backgrounds/forest.jpg",
    character: "images/characters/girl.png",
    speaker: "Лія",
    text: "Ти на межі двох світів. Один шлях веде назад, інший — до знань, які змінюють долю.",
    choices: [
      { text: "Обрати шлях до знань", next: "academy" },
      { text: "Повернутися назад", next: "forestEnd" }
    ]
  },

  academy: {
    background: "images/backgrounds/academy.jpg",
    character: "images/characters/boy.png",
    speaker: "Кай",
    text: "Нарешті ти тут. Академія приймає не всіх. Але якщо двері відчинилися — значить, у тебе є причина бути тут.",
    choices: [
      { text: "Я готова навчатися", next: "library" },
      { text: "Я хочу дізнатися правду", next: "truth" }
    ]
  },

  library: {
    background: "images/backgrounds/library.jpg",
    character: "images/characters/girl.png",
    speaker: "Лія",
    text: "У бібліотеці зберігаються книги, які відповідають лише тим, хто ставить правильні запитання.",
    choices: [
      { text: "Поставити запитання", next: "goodEnd" },
      { text: "Відкрити першу книгу", next: "mysteryEnd" }
    ]
  },

  truth: {
    background: "images/backgrounds/library.jpg",
    character: "images/characters/boy.png",
    speaker: "Кай",
    text: "Правда не завжди відкривається одразу. Іноді вона перевіряє, чи готова людина її витримати.",
    choices: [
      { text: "Я готова", next: "goodEnd" },
      { text: "Мені страшно", next: "mysteryEnd" }
    ]
  },

  goodEnd: {
    background: "images/backgrounds/academy.jpg",
    character: "images/characters/girl.png",
    speaker: "Лія",
    text: "Ти зробила перший правильний вибір. Це лише початок твоєї історії.",
    choices: [
      { text: "Почати знову", next: "start" }
    ]
  },

  mysteryEnd: {
    background: "images/backgrounds/library.jpg",
    character: "images/characters/boy.png",
    speaker: "Кай",
    text: "Книга відкрилася сама. На першій сторінці було написано твоє ім’я.",
    choices: [
      { text: "Почати знову", next: "start" }
    ]
  },

  forestEnd: {
    background: "images/backgrounds/forest.jpg",
    character: "",
    speaker: "Оповідач",
    text: "Ти залишаєшся в лісі. Дорога назад ще є, але тепер ти знаєш: існує щось більше.",
    choices: [
      { text: "Почати знову", next: "start" }
    ]
  }
};
