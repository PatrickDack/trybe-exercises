const Fetch = require('node-fetch');
const URL = 'https://dog.ceo/api/breeds/image/random';

const fetchApi = () => {
  Fetch(URL)
  .then((response) => response.json())
  .then((json) =>
    response.ok ? Promise.resolve(json) : Promise.reject(json)
  );
}

module.exports = {
  fetchApi
}
