const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função handlerElephants retorna corretamente quando recebe parametro count', () => {
    expect(handlerElephants('count', 'elephants')).toStrictEqual(4);
  });

  it('Verifica se a função retorna corretamente quando recebe parametro names', () => {
    expect(handlerElephants('names', 'elephants')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se a função retorna corretamente quando recebe parametro averageAge', () => {
    expect(handlerElephants('averageAge', 'elephants')).toStrictEqual(10.5); // não precisou da lógica aproximada pois o resultado é exatamente 10.5
  });

  it('Verifica se a função retorna corretamente quando recebe parametro location', () => {
    expect(handlerElephants('location', 'elephants')).toStrictEqual('NW');
  });

  it('Verifica se a função retorna corretamente quando recebe parametro popularity', () => {
    expect(handlerElephants('popularity', 'elephants')).toStrictEqual(5);
  });

  it('Verifica se a função retorna corretamente quando recebe parametro availability', () => {
    expect(handlerElephants('availability', 'elephants')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Verifica se a função retorna corretamente quando NÃO recebe parametro', () => {
    expect(handlerElephants()).toStrictEqual(undefined);
  });
});

// it('', () => {

// });
