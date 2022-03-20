/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */

export default class Destrucuring {
  constructor() {
    this.special = [];
  }

  // не очень ясно что от меня требуется  :\
  findSpecial({
    special,
  }, id) {
    this.special = [...special].filter((el) => el.id === id);
    return this.special;
  }
}

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export { character };
