const hoFinito = () => {
  console.log("lavoro completato!");
};

const nonRiesco = () => {
  console.log("Non sono capace!");
};

function pippo(callback) {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  callback();
}

pippo(hoFinito);
pippo(nonRiesco);
