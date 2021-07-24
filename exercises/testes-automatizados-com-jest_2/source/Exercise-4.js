const fetch = require('node-fetch');
const URL = 'https://api.github.com/orgs/tryber/repos';


const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => data.map((repo) => repo.name));
};

getRepos(URL);

module.exports = getRepos;