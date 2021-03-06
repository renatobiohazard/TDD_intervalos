// appSpec.js
var app = require('../app.js');

describe("Falha no teste pois", function() {

  var lista0 = [];
  var lista1 = [1,2,3,6,7];
  var lista2 = [1,'A',3,4];
  var listaEsperada = [[1,2,3],[6,7]];
  // PRIMEIRO CASO
  it("a lista é de nula.", function() {
    expect(false).toBe(app.ehNula(lista1));
  });
  // SEGUNDO CASO
  it("a lista nao é de nula.", function() {
    expect(true).toBe(app.ehNula(lista0));
  });
  
// TERCEIRO CASO
  it("a lista não é de números.", function() {
  	  expect(true).toBe(app.ehNumero(lista1));
  });

  // QUARTO CASO
  it("a lista é de números.", function() {
    expect(false).toBe(app.ehNumero(lista2));
  });

  // QUINTO CASO
  it("a lista não é esperada.", function() {
    expect(listaEsperada).toEqual(app.intervalos(lista1));
  });

  // SEXTO CASO
  it("a lista não é esperada.", function() {
    expect(listaEsperada).not.toEqual(app.intervalos(lista2));
  });

});
