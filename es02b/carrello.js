const EventEmitter = require('events');

class Carrello extends EventEmitter {
  constructor() {
    super();
    this.prodotti = [];
    this.totale = 0;
  }
  
  aggiungiProdotto(nome, prezzo, quantita = 1) {
    const prodotto = { nome, prezzo, quantita };
    this.prodotti.push(prodotto);

    // Aggiorna il totale
    this.totale += prezzo * quantita;
    
    // Emetti evento 'prodotto-aggiunto'
    this.emit('prodotto-aggiunto', prodotto);

    // Se il totale supera 100€, emetti 'sconto-disponibile'
    if (this.totale > 100) {
      this.emit('sconto-disponibile', this.totale);
    }
  }
  
  rimuoviProdotto(nome) {
    const index = this.prodotti.findIndex(p => p.nome === nome);
    if (index === -1) return;

    const prodotto = this.prodotti[index];

    // Aggiorna totale
    this.totale -= prodotto.prezzo * prodotto.quantita;

    // Rimuovi prodotto
    this.prodotti.splice(index, 1);
    
    // Emetti evento
    this.emit('prodotto-rimosso', prodotto);
  }
  
  svuota() {
    this.prodotti = [];
    this.totale = 0;

    this.emit('carrello-svuotato');
  }
  
  getTotale() {
    return this.totale;
  }
}

// =========================
// CREA CARRELLO + LISTENER
// =========================
const carrello = new Carrello();

// Listener che mostra il prodotto aggiunto
carrello.on('prodotto-aggiunto', prodotto => {
  console.log(`Aggiunto: ${prodotto.nome} x${prodotto.quantita}`);
});

// Listener che aggiorna il display del totale
carrello.on('prodotto-aggiunto', () => {
  console.log(`Totale attuale: ${carrello.getTotale()}€`);
});

// Listener per prodotto rimosso
carrello.on('prodotto-rimosso', prodotto => {
  console.log(`Rimosso: ${prodotto.nome}`);
  console.log(`Totale attuale: ${carrello.getTotale()}€`);
});

// Messaggio sconto
carrello.on('sconto-disponibile', totale => {
  console.log(`🎉 Hai superato 100€! Totale: ${totale}€ — Sconto disponibile!`);
});

// Svuotamento
carrello.on('carrello-svuotato', () => {
  console.log("Carrello svuotato.");
});

// =========================
// TEST
// =========================

carrello.aggiungiProdotto('Laptop', 899, 1);
carrello.aggiungiProdotto('Mouse', 25, 2);
