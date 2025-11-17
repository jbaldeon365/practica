const calcularTotal = require('./calcularTotal');

test('calcula total sin descuento', () => {
  expect(calcularTotal(10, 2)).toBe(20);
});

test('calcula total con descuento', () => {
  expect(calcularTotal(100, 1, 0.2)).toBe(80);
});

test('lanza error con valores negativos', () => {
  expect(() => calcularTotal(-10, 1)).toThrow("Valores inválidos");
});
