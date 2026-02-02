const operazioni = {
  descrizione: "oggetto operazioni",

  somma: function(a, b) {
    return `${a} + ${b} = ${a + b}`;
  },

  sottrazione: function(a, b) {
    return `${a} - ${b} = ${a - b}`;
  },

  moltiplicazione: function(a, b) {
    return `${a} * ${b} = ${a * b}`;
  },

  divisione: function(a, b) {
    return `${a} / ${b} = ${a / b}`;
  }
};

console.log(operazioni.descrizione);
console.log(operazioni.somma(100, 100));
console.log(operazioni.sottrazione(100, 7));
console.log(operazioni.moltiplicazione(5, 5));
console.log(operazioni.divisione(100, 5));

