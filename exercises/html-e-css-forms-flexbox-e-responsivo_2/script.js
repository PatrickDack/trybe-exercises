const dropDown = document.getElementById('state');

let states = {'AC': 'Acre', 'AL': 'Alagoas', 'AM':  'Amapá', 'AZ': 'Amazonas', 'BA': 'Bahia', 'CE':  'Ceará', 'ES': 'Espírito Santo', 'GO': 'Goiás', 'MA':  'Maranhão', 'MT': 'Mato Grosso', 'MS': 'Mato Grosso do Sul', 'MG':  'Minas Gerais', 'PA':  'Pará', 'PR': 'Paraíba', 'PN': 'Paraná', 'PE': 'Pernambuco', 'PI': 'Piauí', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte', 'RS': 'Rio Grande do Sul', 'RO':  'Rondônia', 'RR': 'Roraima', 'SC': 'Santa Catarina', 'SP': 'São Paulo', 'SE': 'Sergipe', 'TO': 'Tocantins', 'DF': 'Distrito Federal'};

for (let item in states) {
  const createOption = document.createElement('option');
  createOption.innerHTML = states[item];
  createOption.value = item
  dropDown.appendChild(createOption);
}

var picker = new Pikaday({
  field: document.getElementById('input-date'),
  format: 'DD/MM/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});
