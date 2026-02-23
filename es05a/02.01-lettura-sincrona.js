const fs = require('fs');

try {
  // readFileSync() legge l'intero file e restituisce il contenuto
  // 'utf8' specifica l'encoding per ottenere una stringa (non un Buffer)
  const data = fs.readFileSync('file.txt', 'utf8');
  
  console.log('Contenuto del file:');
  console.log(data);
  console.log('Lettura completata');
  
} catch (err) {
  // Gestione degli errori: file non trovato, permessi insufficienti, ecc.
  console.error('Errore durante la lettura del file:', err.message);
}

// Questa riga viene eseguita DOPO che il file è stato letto completamente
console.log('Programma terminato');
