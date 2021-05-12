const dropDown = document.getElementById('state');

let states = {'AC': 'Acre', 'AL': 'Alagoas', 'AM':  'Amapá', 'AZ': 'Amazonas', 'BA': 'Bahia', 'CE':  'Ceará', 'ES': 'Espírito Santo', 'GO': 'Goiás', 'MA':  'Maranhão', 'MT': 'Mato Grosso', 'MS': 'Mato Grosso do Sul', 'MG':  'Minas Gerais', 'PA':  'Pará', 'PR': 'Paraíba', 'PN': 'Paraná', 'PE': 'Pernambuco', 'PI': 'Piauí', 'RJ': 'Rio de Janeiro', 'RN': 'Rio Grande do Norte', 'RS': 'Rio Grande do Sul', 'RO':  'Rondônia', 'RR': 'Roraima', 'SC': 'Santa Catarina', 'SP': 'São Paulo', 'SE': 'Sergipe', 'TO': 'Tocantins', 'DF': 'Distrito Federal'};

for (let item in states) {
  const createOption = document.createElement('option');
  createOption.innerHTML = states[item];
  createOption.value = item
  dropDown.appendChild(createOption);
}

const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const clear = document.getElementById('clear-button');
function clearField() {
  clear.addEventListener('click', () => {
    for (let index = 0; index < inputs.length; index += 1) {
      inputs[index].value = '';
      inputs[index].innerText = '';
      textArea.value = '';
    }
  });
}
clearField();
