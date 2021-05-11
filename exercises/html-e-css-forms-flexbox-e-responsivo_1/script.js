const dropDown = document.getElementById('state');
const createOption = document.createElement('option');
let states = {'AC': 'Acre', 'AL': 'Alagoas', 'AM':  'Amapá', 'AZ': 'Amazonas', 'BA': 'Bahia', 'CE':  'Ceará', 'ES': 'Espírito Santo', 'GO': 'Goiás', 'MA':  'Maranhão', 'MT': 'Mato Grosso', 'MS': 'Mato Grosso do Sul', 'MG':  'Minas Gerais', 'PA':  'Pará', 'PR': 'Paraíba', 'PN': 'Paraná', 'PE': 'Pernambuco', 'PI': 'Piauí', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte', 'RS': 'Rio Grande do Sul', 'RO':  'Rondônia', 'RR': 'Roraima', 'SC': 'Santa Catarina', 'SP': 'São Paulo', 'SE': 'Sergipe', 'TO': 'Tocantins', 'DF': 'Distrito Federal'};

for (let item in states) {
  createOption.innerHTML = states[item];
  createOption.value = item
  dropDown.appendChild(createOption);
}