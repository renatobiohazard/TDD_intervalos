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
  },
  intervalos: function(lista) {
    if (!this.ehNula(lista)) {
      var retorno = [];
      var temp = [];
      for (var i = 0; i < lista.length; i++) {
        if (lista[i] !== null) {
          if ((lista[i] + 1) === lista[i + 1]) {
            temp.push(lista[i]);
          } else {
            retorno.push(temp);
            temp.push(lista[i]);
            temp = [];
          }
        }
      }
      return retorno;
    } else {
      return false;
    }
  }

};
