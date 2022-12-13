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

  it('Verifica se a função retorna open se passar Tuesday como argumento', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual('The zoo is open');
  });

  it('Verifica se a função retorna closed se passar 9PM como argumento', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toStrictEqual('The zoo is closed');
  });

  it('Verifica se a função retorna exceção se passar Thu como argumento', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
});

// it('', () => {

// });