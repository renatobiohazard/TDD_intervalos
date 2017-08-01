// app.js
module.exports = {

  ehNula: function(lista) {
    if (lista.length > 0) {
      return false;
    } else {
      return true;
    }
  },
  ehNumero: function(lista) {
    var res =  true;
    for (var i = 0; i < lista.length; i++) {
      if (!Number.isInteger(lista[i])) {
        res = false;
      }
    }
    return res;
  }

};
