function calcularTotal(precio, cantidad, descuento = 0) {
  if (precio < 0 || cantidad < 0 || descuento < 0) {
    throw new Error("Valores inválidos");
  }
  
  const subtotal = precio * cantidad;
  return subtotal - (subtotal * descuento);
}

module.exports = calcularTotal;
