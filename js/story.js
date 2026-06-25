const story = {

    start: {
        background: "images/backgrounds/forest.png",
        character: "images/characters/girl.png",
        speaker: "Лія",
        text: "Я чекала на тебе. Цей ліс не випадково привів тебе сюди.",
        choices: [
            {
                text: "Хто ти?",
                next: "who"
            },
            {
                text: "Де я?",
                next: "where"
            }
        ]
    },

    who: {
        background: "images/backgrounds/forest.png",
        character: "images/characters/girl.png",
        speaker: "Лія",
        text: "Мене звати Лія. Я провідниця між звичайним світом та Академією Місячного Світла.",
        choices: [
            {
                text: "Піти з Лією",
                next: "academy"
            },
            {
                text: "Залишитися в лісі",
                next: "forestEnd"
            }
        ]
    },

    where: {
        background: "images/backgrounds/forest.png",
        character: "images/characters/girl.png",
        speaker: "Лія",
        text: "Ти знаходишся на межі двох світів. Один шлях веде назад, інший — до знань.",
        choices: [
            {
                text: "Піти до Академії",
                next: "academy"
            },
            {
                text: "Повернутися",
                next: "forestEnd"
            }
        ]
    },

    academy: {
        background: "images/backgrounds/academy.png",
        character: "images/characters/boy.png",
        speaker: "Кай",
        text: "Ласкаво просимо до Академії. Сюди потрапляють лише ті, хто готовий змінити власну долю.",
        choices: [
            {
                text: "Оглянути бібліотеку",
                next: "library"
            },
            {
                text: "Запитати про Академію",
                next: "truth"
            }
        ]
    },

    library: {
        background: "images/backgrounds/library.png",
        character: "images/characters/girl.png",
        speaker: "Лія",
        text: "У цій бібліотеці зберігаються книги, що пам'ятають історію кожного світу.",
        choices: [
            {
                text: "Відкрити стародавню книгу",
                next: "goodEnd"
            },
            {
                text: "Повернутися до Кая",
                next: "truth"
            }
        ]
    },

    truth: {
        background: "images/backgrounds/academy.png",
        character: "images/characters/boy.png",
        speaker: "Кай",
        text: "Академія існує для тих, хто готовий робити вибір і нести відповідальність за свої рішення.",
        choices: [
            {
                text: "Я готова навчатися",
                next: "goodEnd"
            },
            {
                text: "Поки що ні",
                next: "forestEnd"
            }
        ]
    },

    goodEnd: {
        background: "images/backgrounds/library.png",
        character: "images/characters/girl.png",
        speaker: "Лія",
        text: "Твоя пригода лише починається. Попереду — нові відкриття, друзі та випробування.",
        choices: [
            {
                text: "Почати спочатку",
                next: "start"
            }
        ]
    },

    forestEnd: {
        background: "images/backgrounds/forest.png",
        character: "",
        speaker: "Оповідач",
        text: "Ти повертаєшся додому, але десь далеко Академія все ще чекає на тих, хто наважиться зробити перший крок.",
        choices: [
            {
                text: "Почати спочатку",
                next: "start"
            }
        ]
    }

};
