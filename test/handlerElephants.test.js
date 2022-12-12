const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função handlerElephants retorna corretamente quando recebe parametro count', () => {
    expect(handlerElephants('count', 'elephants')).toStrictEqual(4);
  });

  it('Verifica se a função retorna corretamente quando recebe parametro names', () => {
    expect(handlerElephants('names', 'elephants')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se a função retorna corretamente quando recebe paramtro averageAge', () => {
    expect(handlerElephants('averageAge', 'elephants')).toStrictEqual(10.5); // não precisou da lógica aproximada pois o resultado é exatamente 10.5
  });

  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });

  it('', () => {

  });
});

// it('', () => {

// });
