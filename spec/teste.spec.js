// appSpec.js
var app = require('../app.js');

describe("Falha no teste pois", function() {


  var lista1 = [1,2,3,6,7];

  // PRIMEIRO CASO
  it("a lista nao é de nula.", function() {
    expect(false).toBe(app.ehNula(lista1));
  });
  

});
