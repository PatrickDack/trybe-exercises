const fs = require('fs');

const writeFile = (arquivo, texto) => {
  fs.writeFileSync(arquivo, texto);
  return 'ok';
};

module.exports = writeFile;
