const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se não passar argumentos', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se a função retorna closed se passar Monday como argumento', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toStrictEqual('The zoo is closed');
  });

  it('', () => {

  });
});

// it('', () => {

// });