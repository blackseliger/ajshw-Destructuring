import Destrucuring, { character } from '../js/app';

describe('arrayContaining', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
  ];

  it('arrays must match', () => {
    const destrucuring = new Destrucuring();
    expect(destrucuring.findSpecial(character, 8)).toEqual(expect.arrayContaining(expected));
  });
});
